//@ts-ignore
import graphql from "babel-plugin-relay/macro";

export default graphql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      Token
      error
      success
    }
  }
`;
