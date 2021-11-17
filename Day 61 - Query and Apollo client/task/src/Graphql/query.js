import { gql } from "@apollo/client";

const GetAllPassengers = gql`
    query MyQuery {
        anggota {
            jenis_kelamin
            id
            nama
            umur
        }
    }
`;

const GetSinglePassenger = gql`
    query MyQuery($id: Int!) {
        anggota(where: { id: { _eq: $id } }) {
            id
            jenis_kelamin
            nama
            umur
        }
    }
`;

const GetPassengersByGender = gql`
    query MyQuery($gender: String!) {
        anggota(where: { jenis_kelamin: { _eq: $gender } }) {
            id
            jenis_kelamin
            nama
            umur
        }
    }
`;

const GetPassengersByAge = gql`
    query MyQuery($age: Int!) {
        anggota(where: { umur: { _eq: $age } }) {
            id
            jenis_kelamin
            nama
            umur
        }
    }
`;

const GetPassengersByName = gql`
    query MyQuery($name: String!) {
        anggota(where: { nama: { _eq: $name } }) {
            id
            jenis_kelamin
            nama
            umur
        }
    }
`;

export {
    GetAllPassengers,
    GetSinglePassenger,
    GetPassengersByGender,
    GetPassengersByAge,
    GetPassengersByName,
};
