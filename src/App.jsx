import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Verification from "./pages/Verification";
import WelcomePage from "./pages/Welcome";
import Home from "./pages/home";
import JatDaMuqabla from "./pages/jatDaMuqabla";
import Hardimages from "./pages/hardimages";
import Quiz from "./pages/quiz";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Verification />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/jatDaMuqabla" element={<JatDaMuqabla />} />
        <Route path="/Hardimages" element={<Hardimages />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;
