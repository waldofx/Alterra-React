import ProfilePage from "./pages/Profile/ProfilePage";
import { mockUsers } from "./MockData";

function App() {
    return <ProfilePage users={mockUsers} />;
}

export default App;
