import { StringifyOptions } from "querystring";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useMutation } from "relay-hooks";
import {
  ConnectionHandler,
  ReadOnlyRecordProxy,
  RecordProxy,
  RecordSourceSelectorProxy,
  ROOT_ID,
} from "relay-runtime";
import CreateUserMutation from "../../modules/relay/CreateUserMutation";
import DeleteUserMutation from "../../modules/relay/DeleteUserMutation";
import LoginMutation from "../../modules/relay/LoginMutation";
import UpdateUserMutation from "../../modules/relay/UpdateUserMutation";

interface IUserLogin {
  name: string;
  email: string;
  password: string;
}
interface IUserCreate {
  name: string;
  email: string;
  password: string;
}

interface IUserDelete {
  id: string;
}

interface IUserUpdate {
  id: string;
  name: string;
  email: string;
  password: string;
}

interface UserContextData {
  logOut: () => void;
  login: (data: IUserLogin) => void;
  createUser: (data: IUserCreate) => void;
  deleteUser: (data: IUserDelete) => void;
  updateUser: (data: IUserUpdate) => void;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<UserContextData>(
  {} as UserContextData
);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const history = useHistory();
  const [submitLogin] = useMutation(LoginMutation);
  const [submitCreate] = useMutation(CreateUserMutation);
  const [submitDelete] = useMutation(DeleteUserMutation);
  const [submitUpdate] = useMutation(UpdateUserMutation);

  const logOut = useCallback(() => {
    localStorage.removeItem("@CRUD:Token");
    history.push("/");
  }, []);

  const login = useCallback(async (data: IUserLogin) => {
    const config = {
      variables: {
        ...data,
      },
      updater: (store: RecordSourceSelectorProxy) => {
        const mutationRoot = store.getRootField("login");
        if (!mutationRoot) {
          return;
        }
        const token = mutationRoot.getValue("Token");
        if (token) {
          localStorage.setItem("@CRUD:Token", token.toString());
        }
        console.log(token);
      },
    };
    try {
      await submitLogin(config);
      toast.success("Bem vindo");
      history.push("/dashboard");
    } catch (err) {
      console.log(err);
      toast.error("Email ou senha invalidos");
    }
  }, []);

  const createUser = useCallback(async (data: IUserCreate) => {
    console.log(data);
    const config = {
      variables: {
        ...data,
      },
      updater: (store: RecordSourceSelectorProxy) => {
        const payload = store.getRootField("createUser");
        const serverEdge = payload?.getLinkedRecord("userEdge");
        const storyRecord = store.get(ROOT_ID);
        if (storyRecord && serverEdge) {
          const conn = ConnectionHandler.getConnection(
            storyRecord,
            "User_getAllUsers"
          );

          conn && ConnectionHandler.insertEdgeAfter(conn, serverEdge);
        }
      },
    };
    try {
      await submitCreate(config);
      toast.success("Usuario criado");
      history.push("/");
    } catch (err) {
      console.log(err);
      toast.error("Email ja existente");
    }
  }, []);

  const deleteUser = useCallback(async (data: IUserDelete) => {
    const config = {
      variables: {
        ...data,
      },
      updater: (store: RecordSourceSelectorProxy) => {
        const mutationRoot = store.getRootField("deleteUser");
        if (!mutationRoot) {
          return;
        }
        const deleteID = mutationRoot.getValue("deleteID");
        const parentProxy =
          ROOT_ID === null ? store.getRoot() : store.get(ROOT_ID);
        if (parentProxy && deleteID) {
          const connection = ConnectionHandler.getConnection(
            parentProxy,
            "User_getAllUsers"
          );
          console.log(deleteID);
          console.log(parentProxy);
          console.log(connection);
          if (!connection) {
            console.log(
              `Connection User_getAllUsers not found on ${ROOT_ID}, maybe this connection is not in relay store yet`
            );
            return;
          }
          ConnectionHandler.deleteNode(connection, deleteID.toString());
        }
      },
    };

    try {
      await submitDelete(config);
      toast.success("Usuario deletado");
    } catch (err) {
      console.log(err);
      toast.error("Nao foi possivel deletar o usuario");
    }
  }, []);

  const updateUser = useCallback(async (data: IUserUpdate) => {
    const config = {
      variables: {
        ...data,
      },
      updater: (store: RecordSourceSelectorProxy) => {
        const payload = store.getRootField("updateUser");
        const serverEdge = payload?.getLinkedRecord("userEdge");
        const storyRecord = store.get(data.id);
        if (storyRecord && serverEdge) {
          const conn = ConnectionHandler.getConnection(
            storyRecord,
            "User_getAllUsers"
          );

          // conn && ConnectionHandler.update(store, payload);
        }
      },
    };
    try {
      await submitUpdate(config);
      toast.success("Usuario atualizado");
      setModalOpen(false);
    } catch (error) {
      console.log(error);
      toast.error("Nao foi possivel atualizar o usuario");
    }
  }, []);
  return (
    <UserContext.Provider
      value={{
        login,
        createUser,
        deleteUser,
        updateUser,
        modalOpen,
        setModalOpen,
        logOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
