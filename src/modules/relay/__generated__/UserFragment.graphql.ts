/**
 * @generated SignedSource<<6c3afc5394a542c77937bd644c0ba033>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserFragment$data = {
  readonly id: string;
  readonly name: string | null;
  readonly email: string | null;
  readonly password: string | null;
  readonly " $fragmentType": "UserFragment";
};
export type UserFragment$key = {
  readonly " $data"?: UserFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserFragment",
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

(node as any).hash = "fcf08177711fb9091663b2f69ed44664";

export default node;
