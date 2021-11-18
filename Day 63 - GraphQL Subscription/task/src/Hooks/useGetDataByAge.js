import { useLazyQuery } from "@apollo/client";
import { GetPassengersByAge } from "../Graphql/query";

function useGetPassengersByAge() {
    const [
        getDataByAge,
        { data: dataByAge, loading: loadingDataByAge, error: errorDataByAge },
    ] = useLazyQuery(GetPassengersByAge);
    return {
        getDataByAge,
        dataByAge,
        loadingDataByAge,
        errorDataByAge,
    };
}

export default useGetPassengersByAge;
