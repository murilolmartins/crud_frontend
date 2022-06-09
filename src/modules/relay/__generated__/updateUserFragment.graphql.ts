/**
 * @generated SignedSource<<027f919d5fe1ef2784fb89b1ea654fb5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type updateUserFragment$data = {
  readonly id: string;
  readonly name: string | null;
  readonly email: string | null;
  readonly password: string | null;
  readonly " $fragmentType": "updateUserFragment";
};
export type updateUserFragment$key = {
  readonly " $data"?: updateUserFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"updateUserFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "updateUserFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "password",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "d81bfd16a65e9b2053f46fa3769df06a";

export default node;
