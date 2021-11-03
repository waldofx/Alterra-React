import Header from "./components/Header";
import TodoCard from "./components/TodoCard";

export default function TodoPage({ users }) {
    return (
        <>
            <Header text="To Do App" />
            {users.map((user) => (
                <TodoCard user={user} />
            ))}
        </>
    );
}
