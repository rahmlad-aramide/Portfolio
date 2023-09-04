import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  About,
  Contact,
  Home,
  Skills,
  Projects,
  ErrorPage,
  TopProjects,
  ProjectDetail,
} from "./Components";
import Navbar from "./Components/Navbar"
import NavbarMobile from "./Components/NavbarMobile"
import { ThemeProvider } from "./Context/ThemeContext";

function App() {
  return (
    <div className="font-body">
      <ThemeProvider>
        <Navbar />
        <NavbarMobile />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tech-stack" element={<Skills />} />
          <Route path="/projects" element={<TopProjects />} />
          <Route path="/projects/:name" element={<ProjectDetail />} />
          <Route path="/archive" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
