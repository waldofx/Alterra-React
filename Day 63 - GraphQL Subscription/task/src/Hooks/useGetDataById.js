import { useLazyQuery } from "@apollo/client";
import { GetSinglePassenger } from "../Graphql/query";

function useGetDataById() {
    const [
        getDataById,
        { data: dataById, loading: loadingSingleData, errorSingleData },
    ] = useLazyQuery(GetSinglePassenger);
    return { getDataById, dataById, loadingSingleData, errorSingleData };
}

export default useGetDataById;
