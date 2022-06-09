//@ts-ignore
import graphql from "babel-plugin-relay/macro";

export default graphql`
  mutation UpdateUserMutation(
    $id: ID!
    $name: String
    $email: String
    $password: String
  ) {
    updateUser(
      input: { id: $id, name: $name, email: $email, password: $password }
    ) {
      userEdge {
        cursor
        node {
          ...UserFragment
        }
      }
      error
      success
    }
  }
`;
