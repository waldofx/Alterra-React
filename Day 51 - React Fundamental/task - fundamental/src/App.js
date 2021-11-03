import TodoPage from "./pages/Profile/TodoPage";
import { mockUsers } from "./mockData";

function App() {
  
  return (
    <TodoPage users={mockUsers}/>
  );
}

export default App;
