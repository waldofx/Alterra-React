import { InsertPassenger } from "../Graphql/mutation";
import { useMutation } from "@apollo/client";
import { GetAllPassengers } from "../Graphql/query";

function useInsertPassenger() {
    const [insertPassengers, { loading: loadingInsert }] = useMutation(
        InsertPassenger,
        { refetchQueries: [GetAllPassengers] }
    );
    return { insertPassengers, loadingInsert };
}

export default useInsertPassenger;
