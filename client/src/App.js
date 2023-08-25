import { Routes, Route } from "react-router-dom"
import Authentication from "./Pages/Authentication";
import HomePage from "./Pages/HomePage";
import AddPost from "./Pages/AddPost";
import ProfilePage from "./Pages/ProfilePage";
import UsersPage from "./Pages/UsersPage";
import SearchingPage from "./Pages/SearchingPage";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Authentication/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/addPost" element={<AddPost/>}/>
      <Route path="/profile" element={<ProfilePage/>}/>
      <Route path="/users" element={<UsersPage/>}/>
      <Route path="/search" element={<SearchingPage/>}/>
    </Routes> 
  );
}

export default App;
