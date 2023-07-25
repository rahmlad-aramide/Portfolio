import { useContext } from "react";
import { ThemeContext } from "../Context";

import { FaMoon, FaSun } from "react-icons/fa";

const Toggler = () => {
  const { theme, handleColor } = useContext(ThemeContext);

  return (
    <div onClick={() => handleColor()} className={`flex items-start cursor-pointer`}>
      {theme.name === "dark" ? <FaSun size={25} /> : <FaMoon size={25} />}
    </div>
  );
};

export default Toggler;
