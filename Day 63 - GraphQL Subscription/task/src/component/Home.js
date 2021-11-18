import { useEffect, useState } from "react";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import LoadingSvg from "./LoadingSvg";
import SearchId from "./SearchId";
import SearchName from "./SearchName";
import SearchGender from "./SearchGender";
import SearchAge from "./SearchAge";
import useSubscriptionPassengers from "../Hooks/useSubscriptionPassengers";
import useGetPassengersByGender from "../Hooks/useGetDataByGender";
import useGetPassengersByAge from "../Hooks/useGetDataByAge";
import useGetPassengersByName from "../Hooks/useGetDataByName";
import useGetDataById from "../Hooks/useGetDataById";
import useDeletePassenger from "../Hooks/useDeletePassenger";
import useInsertPassenger from "../Hooks/useInsertPassenger";
import useUpdatePassenger from "../Hooks/useUpdatePassenger";

function Home() {
    // ----------------- custom hook graphql -------------------------
    const { getDataById, dataById, loadingSingleData, errorSingleData } =
        useGetDataById();
    const { allData, errorAllData, loadingAllData } =
        useSubscriptionPassengers();
    const {
        getDataByGender,
        dataByGender,
        errorDataByGender,
        loadingDataByGender,
    } = useGetPassengersByGender();
    const { getDataByAge, dataByAge, errorDataByAge, loadingDataByAge } =
        useGetPassengersByAge();
    const { getDataByName, dataByName, loadingDataByName, errorDataByName } =
        useGetPassengersByName();
    const { deletePassenger, loadingDelete } = useDeletePassenger();
    const { insertPassengers, loadingInsert } = useInsertPassenger();
    const { updatePassenger, loadingUpdate } = useUpdatePassenger();
    // ----------------- custom hook graphql -------------------------

    // ----------------- state -------------------
    const [passengers, setPassengers] = useState([]);
    const [search, setSearch] = useState("id");
    const [openInput, setOpenInput] = useState(true);
    const [inputData, setInputData] = useState({
        nama: "",
        umur: "",
        jenisKelamin: "Pria",
    });
    // ----------------- state -------------------

    // ----------------- side effect -------------
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
    // ----------------- side effect -------------

    // ----------------- handler function -------------------
    const changeSearch = (indetifier) => {
        setSearch(indetifier);
    };

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
        deletePassenger({
            variables: {
                id: id,
            },
        });
    };

    const updateHandler = (data) => {
        updatePassenger({
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
    // ----------------- handler function -------------------

    // ----------------- error & loading state ----------------
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
    // ----------------- error & loading state ----------------

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
