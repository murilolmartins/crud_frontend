import { Environment, Network, RecordSource, Store } from "relay-runtime";

const fetchQuery = async (operation: any, variables: any) => {
  return await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer",
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

const network = Network.create(fetchQuery);

const source = new RecordSource();

const store = new Store(source);

const env = new Environment({
  network,
  store,
});

export default env;
