import React, { useState } from "react";
import Nav from "./Nav";
import Header from "./Header";

const Layout = (props) => {
  const [darkTheme, setDarkTheme] = useState(true);
  const setDark = (dark) => {
    setDarkTheme(!darkTheme);
  };
  return (
    <div>
      <div className="container">
        <Header setDark={darkTheme} />
        <Nav setDark={setDark} />
        {/* {props.children} */}
      </div>
    </div>
  );
};

export default Layout;
