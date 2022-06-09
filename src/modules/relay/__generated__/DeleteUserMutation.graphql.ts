/**
 * @generated SignedSource<<7c527ff5216cfdd4d6d4c7c03f291b86>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteUserMutation$variables = {
  id: string;
};
export type DeleteUserMutation$data = {
  readonly deleteUser: {
    readonly Message: string | null;
    readonly deleteID: string | null;
    readonly error: string | null;
    readonly success: string | null;
  } | null;
};
export type DeleteUserMutation = {
  variables: DeleteUserMutation$variables;
  response: DeleteUserMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "DeleteUserPayload",
    "kind": "LinkedField",
    "name": "deleteUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "Message",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "deleteID",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "error",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "success",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteUserMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "527af7005acfcff6d1d3ffc44072ed5a",
    "id": null,
    "metadata": {},
    "name": "DeleteUserMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteUserMutation(\n  $id: ID!\n) {\n  deleteUser(input: {id: $id}) {\n    Message\n    deleteID\n    error\n    success\n  }\n}\n"
  }
};
})();

(node as any).hash = "c93abe193b7dd452da96c31e9de6c694";

export default node;
