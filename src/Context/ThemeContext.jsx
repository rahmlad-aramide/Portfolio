import { createContext, useEffect, useState } from "react";

const themes = {
  light: {
    name: "light",
    background: "#f5f5f5",
    foreground: "#42446E",
    content: "#666666",
    projectBg: "#ffffff",
    natural: "#000000",
  },
  dark: {
    name: "dark",
    background: "#191919",
    foreground: "#D9D9D9",
    content: "#A7A7A7",
    projectBg: "#363636",
    natural: "#ffffff",
  },
};

const ThemeContext = createContext();
export default ThemeContext;

export const ThemeProvider = ({ children }) => {
  const [color, setColor] = useState("light");
  const [theme, setTheme] = useState(themes.light);

  const handleLight = () => {
    setTheme(themes.light);
  };
  const handleDark = () => {
    setTheme(themes.dark);
  };
  const handleColor = () => {
    color === "light" ? setColor("dark") : setColor("light");
  };
  useEffect(() => {
    color === "light" ? handleLight() : handleDark();
  }, [color]);

  return (
    <ThemeContext.Provider value={{ theme, handleColor }}>
      {children}
    </ThemeContext.Provider>
  );
};
