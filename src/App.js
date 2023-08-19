// import logo from "./logo.svg";
import "./App.css";
import { HomePage } from "./Pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ServiceContextProvider } from "./Components/ContextAPI/Context";
import { ServicesPage } from "./Pages/ServicesPage";
import { Projects } from "./Components/Projects";
import { Bio } from "./Components/Bio";
import { ContactPage } from "./Pages/ContactPage";

function App() {
  return (
    <ServiceContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </Router>
    </ServiceContextProvider>
  );
}

export default App;
