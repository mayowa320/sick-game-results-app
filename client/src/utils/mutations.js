import { gql } from "@apollo/client";

export const SAVE_GAME = gql`
  mutation Mutation($input: RecordInput) {
    saveRecord(input: $input)
  }
`;
export const REMOVE_GAME = gql`
  mutation Mutation($recordId: String) {
    removeRecord(recordId: $recordId)
  }
`;
