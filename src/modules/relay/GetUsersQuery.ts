//@ts-ignore
import graphql from "babel-plugin-relay/macro";

export default graphql`
  query GetUsersQuery(
    $after: String
    $first: Int
    $before: String
    $last: Int
  ) {
    getAllUsers(after: $after, first: $first, before: $before, last: $last)
      @connection(key: "User_getAllUsers") {
      edges {
        cursor
        node {
          ...UserFragment
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;
