import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Technologies from "./pages/Technologies";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import { BrowserRouter } from "react-router-dom";
import ProjectsPage from "./pages/Projects";
function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col max-w-3xl min-h-screen mx-auto text-white px-8 font-sans">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
