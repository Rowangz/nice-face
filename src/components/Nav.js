import React from "react";

const Nav = () => {
  const style = {
    display: "flex",
    justifyContent: "flex-end",
    padding: "20px",
  };
  return (
    <nav style={style}>
      <p className="f3 link dim black underline pa3 pointer">Sign out</p>
    </nav>
  );
};

export default Nav;
