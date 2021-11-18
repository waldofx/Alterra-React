import { useSubscription } from "@apollo/client";
import SubscriptionPassengers from "../Graphql/subscription";

function useSubscriptionPassengers() {
    const {
        data: allData,
        loading: loadingAllData,
        error: errorAllData,
    } = useSubscription(SubscriptionPassengers);
    return { allData, loadingAllData, errorAllData };
}

export default useSubscriptionPassengers;
