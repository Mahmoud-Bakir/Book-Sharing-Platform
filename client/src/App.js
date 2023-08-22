import { Routes, Route } from "react-router-dom"
import Authentication from "./Pages/Authentication";
import HomePage from "./Pages/HomePage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Authentication/>}/>
      <Route path="/home" element={<HomePage/>}/>
    </Routes> 
  );
}

export default App;
