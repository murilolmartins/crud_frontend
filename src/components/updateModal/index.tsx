import Input from "../Input";
import Button from "../button";
import { Container, Hide } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { UserContext } from "../../providers/user";
import { FiX } from "react-icons/fi";
import { UserFragment$key } from "../../modules/relay/__generated__/UserFragment.graphql";
import { Modal } from "./style";
import { useFragment } from "relay-hooks";
import updateUserFragment from "../../modules/relay/updateUserFragment";

interface UpdateModalProps {
  node: UserFragment$key | null;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IUserUpdate {
  id: string;
  name: string;
  email: string;
  password: string;
}

const UpdateModal = ({ node, setModalOpen }: UpdateModalProps) => {
  const { updateUser } = useContext(UserContext);
  const user = useFragment<UserFragment$key>(updateUserFragment, node);

  const schema = yup.object().shape({
    name: yup.string(),
    email: yup.string(),
    id: yup.string(),
    password: yup.string(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserUpdate>({
    resolver: yupResolver(schema),
  });
  return (
    <Modal>
      <div className="opacity"></div>
      <Container>
        <header>
          <h1>Perfil</h1>
          <FiX onClick={() => setModalOpen(false)}></FiX>
        </header>
        <div className="userData">
          <h2>
            Usuario:<span>{user?.name}</span>
          </h2>
          <h2>
            Email :<span>{user?.email}</span>
          </h2>
        </div>
        <form onSubmit={handleSubmit(updateUser)}>
          <Input placeholder="Nome" register={register} name="name"></Input>
          <Input placeholder="Email" register={register} name="email"></Input>
          <Input
            placeholder="Password"
            register={register}
            name="password"
          ></Input>
          <Hide type="text" {...register("id")} value={user?.id} />
          <Button type="submit">Editar</Button>
        </form>
      </Container>
    </Modal>
  );
};

export default UpdateModal;
