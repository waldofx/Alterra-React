import { useLazyQuery } from "@apollo/client";
import { GetPassengersByName } from "../Graphql/query";

function useGetPassengersByName() {
    const [
        getDataByName,
        {
            data: dataByName,
            loading: loadingDataByName,
            error: errorDataByName,
        },
    ] = useLazyQuery(GetPassengersByName);
    return {
        getDataByName,
        dataByName,
        loadingDataByName,
        errorDataByName,
    };
}

export default useGetPassengersByName;
