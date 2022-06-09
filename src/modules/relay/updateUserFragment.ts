//@ts-ignore
import graphql from "babel-plugin-relay/macro";

export default graphql`
  fragment updateUserFragment on User {
    id
    name
    email
    password
  }
`;
