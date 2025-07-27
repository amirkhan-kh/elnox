"use client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Skills } from "./pages/skills";
import { Projects } from "./pages/projects";
import Header from "./layouts/header/header";

export default function ReactApp() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
