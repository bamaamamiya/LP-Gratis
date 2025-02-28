import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import FormLandingPage from "./components/FormLandingPage";
import InstruksiPage from "./components/InstruksiPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<FormLandingPage />} />
          <Route path="/instruksi" element={<InstruksiPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
