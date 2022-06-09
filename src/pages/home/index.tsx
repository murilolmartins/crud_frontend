import UserCards from "../../components/userCards/index";
import { Container, SmallContainer, Content } from "./style";
import DesktopHeader from "../../components/desktopHeader";
import { useLazyLoadQuery } from "relay-hooks";
import GetUsersQuery from "../../modules/relay/GetUsersQuery";
import {
  GetUsersQuery as GetUsersQueryType,
  GetUsersQuery$data,
} from "../../modules/relay/__generated__/GetUsersQuery.graphql";

function Home() {
  const { data } = useLazyLoadQuery<GetUsersQueryType>(GetUsersQuery);
  return (
    <Container>
      <DesktopHeader isDashBoard={true}></DesktopHeader>
      <SmallContainer>
        <Content>
          <UserCards data={data as GetUsersQuery$data}></UserCards>
        </Content>
      </SmallContainer>
    </Container>
  );
}

export default Home;
