import { useQuery, useMutation, useSubscription } from "@apollo/client";
import { GetTodoList } from "graphql/query";
import { SubscriptionTodo } from "graphql/subscribe";

export default function useGetTodo() {
    const { data, loading, error, subscribeToMore } = useQuery(GetTodoList);

    const subscribeTodo = () => {
        subscribeToMore({
            document: SubscriptionTodo,
            updateQuery: (prev, { subscriptionData: { data } }) => {
                // console.log(data);
                return data;
            },
        });
    };
    return {
        todolist: data ? data.todolist : [],
        loading,
        error,
        subscribeTodo,
    };
}
