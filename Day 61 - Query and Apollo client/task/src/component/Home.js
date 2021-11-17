import { useEffect, useState } from "react";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import { useQuery, useLazyQuery, useMutation } from "@apollo/client";
import LoadingSvg from "./LoadingSvg";
import SearchId from "./SearchId";
import SearchName from "./SearchName";
import SearchGender from "./SearchGender";
import SearchAge from "./SearchAge";
import {
    GetAllPassengers,
    GetPassengersByGender,
    GetPassengersByAge,
    GetPassengersByName,
    GetSinglePassenger,
} from "../Graphql/query";
import {
    DeletePassengers,
    InsertPassengers,
    UpdatePassengers,
} from "../Graphql/mutation";

function Home() {
    const [
        getDataById,
        { data: dataById, loading: loadingSingleData, errorSingleData },
    ] = useLazyQuery(GetSinglePassenger);
    const {
        data: allData,
        loading: loadingAllData,
        error: errorAllData,
    } = useQuery(GetAllPassengers);
    const [
        getDataByGender,
        {
            data: dataByGender,
            loading: loadingDataByGender,
            error: errorDataByGender,
        },
    ] = useLazyQuery(GetPassengersByGender);
    const [
        getDataByAge,
        { data: dataByAge, loading: loadingDataByAge, error: errorDataByAge },
    ] = useLazyQuery(GetPassengersByAge);
    const [
        getDataByName,
        {
            data: dataByName,
            loading: loadingDataByName,
            error: errorDataByName,
        },
    ] = useLazyQuery(GetPassengersByName);
    const [deletePassengers, { loading: loadingDelete }] = useMutation(
        DeletePassengers,
        { refetchQueries: [GetAllPassengers] }
    );
    const [insertPassengers, { loading: loadingInsert }] = useMutation(
        InsertPassengers,
        { refetchQueries: [GetAllPassengers] }
    );
    const [updatePassengers, { loading: loadingUpdate }] = useMutation(
        UpdatePassengers,
        { refetchQueries: [GetAllPassengers] }
    );
    const [passengers, setPassengers] = useState([]);
    const [search, setSearch] = useState("id");
    const [openInput, setOpenInput] = useState(true);
    const [inputData, setInputData] = useState({
        nama: "",
        umur: "",
        jenisKelamin: "Pria",
    });
    function changeSearch(indetifier) {
        setSearch(indetifier);
    }

    useEffect(() => {
        if (allData) {
            setPassengers(allData.anggota);
        }
    }, [allData]);

    useEffect(() => {
        if (dataById) {
            setPassengers(dataById.anggota);
        }
    }, [dataById]);

    useEffect(() => {
        if (dataByGender) {
            setPassengers(dataByGender.anggota);
        }
    }, [dataByGender]);

    useEffect(() => {
        if (dataByAge) {
            setPassengers(dataByAge.anggota);
        }
    }, [dataByAge]);

    useEffect(() => {
        console.log("masuk effect");
        if (dataByName) {
            console.log("masuk if nih");
            setPassengers(dataByName.anggota);
        }
    }, [dataByName]);
    console.log(dataByName);
    const showAllData = () => {
        setPassengers(allData.anggota);
    };

    const clickHandler = (name, identifier) => {
        console.log(name, identifier);
        if (name === "id") {
            getDataById({
                variables: {
                    id: identifier,
                },
            });
        }

        if (name === "age") {
            console.log("masuk age");
            getDataByAge({
                variables: {
                    age: identifier,
                },
            });
        }

        if (name === "name") {
            console.log("name ++ ", identifier);
            getDataByName({
                variables: {
                    name: identifier,
                },
            });
        }

        if (name === "gender") {
            console.log("masuk if");
            getDataByGender({
                variables: {
                    gender: identifier,
                },
            });
        }
    };

    const deleteHandler = (id) => {
        deletePassengers({
            variables: {
                id: id,
            },
        });
    };

    const updateHandler = (data) => {
        updatePassengers({
            variables: {
                id: data.id,
                jenis_kelamin: data.jenis_kelamin,
                nama: data.nama,
                umur: data.umur,
            },
        });
    };

    const insertHandler = (object) => {
        insertPassengers({
            variables: {
                object: object,
            },
        });
    };

    const editHandler = (data) => {
        setOpenInput(false);
        setInputData(data);
    };

    const isError =
        errorSingleData ||
        errorAllData ||
        errorDataByGender ||
        errorDataByAge ||
        errorDataByName;
    const isLoading =
        loadingAllData ||
        loadingSingleData ||
        loadingDataByGender ||
        loadingDataByAge ||
        loadingDataByName ||
        loadingDelete ||
        loadingInsert ||
        loadingUpdate;

    return (
        <div>
            <Header />
            <div>
                <button onClick={() => changeSearch("id")}>Search by id</button>
                <button onClick={() => changeSearch("name")}>
                    Search by name
                </button>
                <button onClick={() => changeSearch("age")}>
                    Search by age
                </button>
                <button onClick={() => changeSearch("gender")}>
                    Search by gender
                </button>
            </div>
            {search === "id" && <SearchId onClick={clickHandler} />}
            {search === "name" && <SearchName onClick={clickHandler} />}
            {search === "age" && <SearchAge onClick={clickHandler} />}
            {search === "gender" && <SearchGender onClick={clickHandler} />}
            <button onClick={showAllData}>Show All</button>
            {isError && <p>Something Went Wrong...</p>}
            {isLoading && <LoadingSvg />}
            {!isError && !isLoading && (
                <ListPassenger
                    onEdit={editHandler}
                    onUpdate={updateHandler}
                    onDelete={deleteHandler}
                    data={passengers}
                />
            )}
            <PassengerInput
                onUpdate={updateHandler}
                onAdd={insertHandler}
                data={inputData}
                isOpen={openInput}
            />
        </div>
    );
}

export default Home;
