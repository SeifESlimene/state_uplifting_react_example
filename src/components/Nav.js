import React, { useState } from "react";

const Nav = ({ setDark }) => {
  const [darkTheme, SetDarkTheme] = useState(true);
  return (
    <nav>
      <p>Click on the button next to me to toggle the theme!</p>
      <button
        className={darkTheme ? "button" : "button light-button"}
        onClick={() => {
          setDark(SetDarkTheme(!darkTheme));
          SetDarkTheme(!darkTheme);
        }}
      >
        {darkTheme ? "Light Theme" : "Dark Theme"}
      </button>
    </nav>
  );
};

export default Nav;
