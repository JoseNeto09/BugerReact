import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Burgers from "./pages/Burgers/Burgers";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Burgers" element={<Burgers/>}/>
      </Routes>
    </Router>
  );
}

export default App;
