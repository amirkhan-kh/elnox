"use client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
// import { About } from "./pages/about";
import { Skills } from "./pages/skills";
import { Projects } from "./pages/projects";
import Header from "./layouts/header/header";
import { SinglePage } from "./single-page";
import NotFoundPage from "./layouts/not-found-page";
import GithubModal from "./ui/git-hub-modal";
import PageLoader from "./ui/page-loader";

export default function ReactApp() {
  return (
    <BrowserRouter>
    <PageLoader>

      <Header />
       <GithubModal />
      <main>
        <Routes>
          {/* <Route path="/" element={<About />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
           <Route path="/projects/:id" element={<SinglePage />} />
           <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </PageLoader>
    </BrowserRouter>
  );
}
