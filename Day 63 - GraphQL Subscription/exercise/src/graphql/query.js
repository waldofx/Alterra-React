import { gql } from "@apollo/client";

export const GetTodoList = gql`
    query MyQuery {
        todolist {
            id
            is_done
            title
        }
    }
`;

// export const getTodoListByUserId = gql`
//   query MyQuery($user_id: Int!) {
//     todolist(where: {user_id: {_eq: $user_id}}) {
//       id
//       title
//       is_done
//     }
//   }
// `
