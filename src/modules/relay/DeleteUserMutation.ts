//@ts-ignore
import graphql from "babel-plugin-relay/macro";

export default graphql`
  mutation DeleteUserMutation($id: ID!) {
    deleteUser(input: { id: $id }) {
      Message
      deleteID
      error
      success
    }
  }
`;
