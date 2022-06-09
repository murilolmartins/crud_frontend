import { GetUsersQuery$data } from "../../modules/relay/__generated__/GetUsersQuery.graphql";
import UserCard from "../userCard";
import { Container } from "./style";

interface UserCardsProps {
  data: GetUsersQuery$data;
}

const UserCards = ({ data }: UserCardsProps) => {
  return (
    <Container>
      {data?.getAllUsers?.edges &&
        data.getAllUsers.edges.map((item) => (
          <UserCard node={item && item.node} key={item?.cursor}></UserCard>
        ))}
    </Container>
  );
};

export default UserCards;
