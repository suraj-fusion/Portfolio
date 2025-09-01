"use client";
import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Work from "./pages/Work";
import NoPage from "./pages/NoPage";
import ProjectsPage from "./pages/Projects";
import TechnologiesPage from "./pages/TechnologiesPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const greetings = ["नमस्ते", "Hello", "你好","Hola", "Bonjour", ];
  const [index, setIndex] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const [endAnim, setEndAnim] = useState(false);

  // cycle through greetings
  useEffect(() => {
    if (index < greetings.length - 1) {
      const timer = setTimeout(() => setIndex(index + 1), 600); // 0.6s per greeting
      return () => clearTimeout(timer);
    } else {
      // trigger final slide up after greetings
      const endTimer = setTimeout(() => setEndAnim(true), 800);
      return () => clearTimeout(endTimer);
    }
  }, [index]);

  return (
    <BrowserRouter>
      <div className="relative">
       
          {showIntro && (
            <motion.div
              key="splash"
              className="absolute top-0 left-0 flex items-center justify-center h-screen w-screen bg-black text-white text-5xl font-bold z-50 bg"
              initial={{ y: 0 }}
              animate={endAnim ? { y: "-100%" } : { y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              onAnimationComplete={() => {
                if (endAnim) setShowIntro(false);
              }}
            >
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {greetings[index]}
              </motion.span>
            </motion.div>
          )}
      
       { showIntro===false && (
          <motion.div
          key="main"
          className="flex flex-col max-w-[50rem] min-h-screen mx-auto text-white px-8 font-sans"
          initial={{ opacity: 0 }}
          animate={{ opacity: showIntro ? 0 : 1 }}
          transition={{ duration: 1 }}
        >
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/technologies" element={<TechnologiesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </motion.div>)
       }
        
       
      </div>
    </BrowserRouter>
  );
}

export default App;
