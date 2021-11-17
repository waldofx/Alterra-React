import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import { useQuery, useLazyQuery, gql } from "@apollo/client";
import LoadingSvg from "./LoadingSvg";

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

const GetPassengerAge = gql`
    query MyQuery($umur: Int!) {
        anggota(where: { umur: { _eq: $umur } }) {
            id
            jenis_kelamin
            nama
            umur
        }
    }
`;

const GetPassengerName = gql`
    query MyQuery($nama: String!) {
        anggota(where: { nama: { _eq: $nama } }) {
            id
            jenis_kelamin
            nama
            umur
        }
    }
`;

function Home() {
    const [
        getData,
        { data: singleData, loading: loadingSingleData, errorSingleData },
    ] = useLazyQuery(GetSinglePassenger);
    const [
        getAgeData,
        {
            data: singleAgeData,
            loading: loadingSingleAgeData,
            errorSingleAgeData,
        },
    ] = useLazyQuery(GetPassengerAge);
    const [
        getNameData,
        {
            data: singleNameData,
            loading: loadingSingleNameData,
            errorSingleNameData,
        },
    ] = useLazyQuery(GetPassengerName);
    const {
        data: allData,
        loading: loadingAllData,
        error: errorAllData,
    } = useQuery(GetAllPassengers);
    const [value, setValue] = useState(0);
    // const [nama, setNama] = useState(0);
    // const [umur, setUmur] = useState("");
    const [passengers, setPassengers] = useState([]);

    useEffect(() => {
        if (allData) {
            setPassengers(allData.anggota);
        }
    }, [allData]);

    useEffect(() => {
        if (singleData) {
            setPassengers(singleData.anggota);
        }
    }, [singleData]);

    useEffect(() => {
        if (singleAgeData) {
            setPassengers(singleAgeData.anggota);
        }
    }, [singleAgeData]);

    useEffect(() => {
        if (singleNameData) {
            setPassengers(singleNameData.anggota);
        }
    }, [singleNameData]);

    const showAllData = () => {
        setPassengers(allData.anggota);
    };

    const HandlerId = () => {
        getData({
            variables: {
                id: value,
            },
        });
    };

    const HandlerNama = () => {
        getNameData({
            variables: {
                nama: value,
            },
        });
    };

    const HandlerUmur = () => {
        getAgeData({
            variables: {
                umur: value,
            },
        });
    };

    if (errorSingleData || errorAllData) {
        return <p>Something Went Wrong...</p>;
    }

    return (
        <div>
            <Header />
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <button style={{ marginBottom: "20px" }} onClick={HandlerId}>
                Search By ID
            </button>
            <button style={{ marginBottom: "20px" }} onClick={HandlerNama}>
                Search By Name
            </button>
            <button style={{ marginBottom: "20px" }} onClick={HandlerUmur}>
                Search By Age
            </button>
            <button onClick={showAllData}>Show All</button>
            {errorAllData && <p>Something Went Wrong...</p>}
            {(loadingAllData ||
                loadingSingleData ||
                loadingSingleAgeData ||
                loadingSingleNameData) && (
                <div className="center">
                    <LoadingSvg />
                </div>
            )}
            {!errorAllData &&
                !loadingAllData &&
                !loadingSingleData &&
                !loadingSingleAgeData &&
                !loadingSingleNameData && <ListPassenger data={passengers} />}
            <PassengerInput />
        </div>
    );
}

export default Home;
