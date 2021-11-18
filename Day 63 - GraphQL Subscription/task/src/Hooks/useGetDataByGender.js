import { useLazyQuery } from "@apollo/client";
import { GetPassengersByGender } from "../Graphql/query";

function useGetPassengersByName() {
    const [
        getDataByGender,
        {
            data: dataByGender,
            loading: loadingDataByGender,
            error: errorDataByGender,
        },
    ] = useLazyQuery(GetPassengersByGender);
    return {
        getDataByGender,
        dataByGender,
        loadingDataByGender,
        errorDataByGender,
    };
}

export default useGetPassengersByName;
