import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import Technologies from "./pages/Technologies";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col max-w-3xl min-h-screen mx-auto text-white px-8 font-sans">
        <p className="w-full bg-red-500 rounded p-2 mt-2">
        
          This portfolio is in progress and haven't been completed yet
        </p>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
