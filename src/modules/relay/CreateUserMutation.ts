//@ts-ignore
import graphql from "babel-plugin-relay/macro";

export default graphql`
  mutation CreateUserMutation(
    $name: String!
    $email: String!
    $password: String!
  ) {
    createUser(input: { name: $name, email: $email, password: $password }) {
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
