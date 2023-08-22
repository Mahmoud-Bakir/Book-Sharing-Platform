import { Routes, Route } from "react-router-dom"
import Authentication from "./Pages/Authentication";
import HomePage from "./Pages/HomePage";
import AddPost from "./Pages/AddPost";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Authentication/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/addPost" element={<AddPost/>}/>
    </Routes> 
  );
}

export default App;
