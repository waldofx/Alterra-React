import { gql } from "@apollo/client";

const DeletePassenger = gql`
    mutation MyMutation($id: Int!) {
        delete_anggota_by_pk(id: $id) {
            id
        }
    }
`;

const InsertPassenger = gql`
    mutation MyMutation($object: anggota_insert_input!) {
        insert_anggota_one(object: $object) {
            id
        }
    }
`;

const UpdatePassenger = gql`
    mutation MyMutation(
        $id: Int!
        $jenis_kelamin: String!
        $nama: String!
        $umur: Int!
    ) {
        update_anggota_by_pk(
            pk_columns: { id: $id }
            _set: { jenis_kelamin: $jenis_kelamin, nama: $nama, umur: $umur }
        ) {
            id
        }
    }
`;

export { DeletePassenger, InsertPassenger, UpdatePassenger };
