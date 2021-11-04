import React from "react";
import NavItems from "./NavItems.js";

const Nav = (props) => {
  return (
    <nav>
      <ul>
        {props.navItems.map((navItems, index) => (
          <NavItems
            key={index}
            navItem={navItems}
            setSection={props.setSection}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
