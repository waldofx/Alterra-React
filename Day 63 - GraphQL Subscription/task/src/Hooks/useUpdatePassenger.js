import { UpdatePassenger } from "../Graphql/mutation";
import { useMutation } from "@apollo/client";
import { GetAllPassengers } from "../Graphql/query";

function useUpdatePassenger() {
    const [updatePassenger, { loading: loadingUpdate }] = useMutation(
        UpdatePassenger,
        { refetchQueries: [GetAllPassengers] }
    );
    return { updatePassenger, loadingUpdate };
}

export default useUpdatePassenger;
