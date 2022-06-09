import { useFragment } from "relay-hooks";
import UserFragment from "../../modules/relay/UserFragment";
import { UserFragment$key } from "../../modules/relay/__generated__/UserFragment.graphql";
import { Container } from "./style";
import { FiX, FiPenTool } from "react-icons/fi";
import { useUser } from "../../providers/user";
import UpdateModal from "../updateModal";
import { useState } from "react";

interface UserCardProps {
  node: UserFragment$key | null;
}
const UserCard = ({ node }: UserCardProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const user = useFragment<UserFragment$key>(UserFragment, node);
  const { deleteUser } = useUser();

  return (
    <>
      <Container>
        <header>
          <div>
            <FiPenTool
              onClick={() => {
                console.log(user);
                setModalOpen(true);
              }}
            />
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
      {modalOpen && <UpdateModal node={node} setModalOpen={setModalOpen} />}
    </>
  );
};

export default UserCard;
