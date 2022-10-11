import React, {useState} from 'react'
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About, Contact, Home, Navbar, Skills, Projects, ErrorPage} from "./Components";
import { ThemeContext, theme } from "./Context";

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const color = darkMode? theme.dark : theme.light;
 const handleTheme = () => {
    setDarkMode(!darkMode)
  }
  
  return (
    <div className="font-body">
      <ThemeContext.Provider value={theme}>
        <Navbar darkMode={darkMode} color={color} handleTheme={handleTheme} setDarkMode={setDarkMode}/>
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode}/>} />
          <Route path="/about" element={<About darkMode={darkMode} />} />
          <Route path="/skills" element={<Skills darkMode={darkMode}/>} />
          <Route path="/projects" element={<Projects darkMode={darkMode}/>} />
          <Route path="/contact" element={<Contact darkMode={darkMode}/>} />
          <Route path="*" element={<ErrorPage darkMode={darkMode}/>} />
        </Routes>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
