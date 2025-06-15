import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import NoPage from "./pages/NoPage";
import { BrowserRouter } from "react-router-dom";
import ProjectsPage from "./pages/Projects";
import TechnologiesPage from "./pages/TechnologiesPage";
import ContactPage from "./pages/ContactPage";
import FramerWrapper from "./components/FramerWrapper";
function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col max-w-[50rem] min-h-screen mx-auto text-white px-8 font-sans">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/technologies" element={<TechnologiesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
