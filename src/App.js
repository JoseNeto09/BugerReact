import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Burgers from "./pages/Burgers/Burgers";
import Combos from "./pages/Combos/combos";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Burgers" element={<Burgers/>}/>
        <Route path="/Combos" element={<Combos/>}/>
      </Routes>
    </Router>
  );
}

export default App;
