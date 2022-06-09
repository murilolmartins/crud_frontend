import { useFragment } from "relay-hooks";
import UserFragment from "../../modules/relay/UserFragment";
import { UserFragment$key } from "../../modules/relay/__generated__/UserFragment.graphql";
import { Container } from "./style";
import { FiX, FiPenTool } from "react-icons/fi";
import { useUser } from "../../providers/user";
import UpdateModal from "../updateModal";

interface UserCardProps {
  node: UserFragment$key | null;
}

const UserCard = ({ node }: UserCardProps) => {
  const user = useFragment<UserFragment$key>(UserFragment, node);
  const { deleteUser, setModalOpen, modalOpen } = useUser();

  return (
    <>
      <Container>
        <header>
          <div>
            <FiPenTool onClick={() => setModalOpen(true)} />
          </div>
          <div>
            <FiX onClick={() => user?.id && deleteUser({ id: user.id })} />
          </div>
        </header>
        <div>
          <p>{user?.name}</p>
        </div>
        <div>
          <p>{user?.email}</p>
        </div>
        <div>
          <p>{user?.id}</p>
        </div>
      </Container>
      {modalOpen && <UpdateModal user={user} />}
    </>
  );
};

export default UserCard;
