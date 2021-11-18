import { gql } from "@apollo/client";

const DeletePassengers = gql`
    mutation MyMutation($id: Int!) {
        delete_anggota_by_pk(id: $id) {
            id
        }
    }
`;

const InsertPassengers = gql`
    mutation MyMutation($object: anggota_insert_input!) {
        insert_anggota_one(object: $object) {
            id
        }
    }
`;

const UpdatePassengers = gql`
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

export { DeletePassengers, InsertPassengers, UpdatePassengers };
