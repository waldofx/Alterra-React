import { useMutation } from "@apollo/client";
import { GetTodoList } from "graphql/query";
import { InsertTodo } from "graphql/mutation";

export default function useInsertTodo() {
    const [insertTodo, { loading: loadingInsert }] = useMutation(InsertTodo, {
        refetchQueries: [GetTodoList],
    });
    return {
        insertTodo,
        loadingInsert,
    };
}
