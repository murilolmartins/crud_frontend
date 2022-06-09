//@ts-ignore
import graphql from "babel-plugin-relay/macro";

export default graphql`
  fragment UserFragment on User {
    id
    name
    email
    password
  }
`;
