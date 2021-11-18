import { useMutation } from "@apollo/client";
import { GetAllPassengers } from "../Graphql/query";
import { DeletePassenger } from "../Graphql/mutation";

function useDeletePassenger() {
    const [deletePassenger, { loading: loadingDelete }] = useMutation(
        DeletePassenger,
        { refetchQueries: [GetAllPassengers] }
    );
    return { deletePassenger, loadingDelete };
}

export default useDeletePassenger;
