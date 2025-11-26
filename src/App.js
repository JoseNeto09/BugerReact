import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Burgers from "./pages/Burgers/Burgers";
import Combos from "./pages/Combos/combos";
import Familia from "./pages/Familia/Familia";
import Contato from "./pages/Contato/Contato";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Burgers" element={<Burgers/>}/>
        <Route path="/Combos" element={<Combos/>}/>
        <Route path="/Familia" element={<Familia/>}/>
        <Route path="/Contato" element={<Contato/>}/>
      </Routes>
    </Router>
  );
}

export default App;
