import { Routes, Route } from "react-router-dom"
import Authentication from "./Pages/Authentication";
import HomePage from "./Pages/HomePage";
import AddPost from "./Pages/AddPost";
import ProfilePage from "./Pages/ProfilePage";
import SearchPage from "./Pages/SearchPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Authentication/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/addPost" element={<AddPost/>}/>
      <Route path="/profile" element={<ProfilePage/>}/>
      <Route path="/search" element={<SearchPage/>}/>
    </Routes> 
  );
}

export default App;
