import React from "react";
import { NavLink } from "react-router-dom";
import SectionLabel from "./SectionLabel";

const NavItem = ({ path, icon, children }) => {
  return (
    <div className="nav-item">
      <NavLink to={path}>
        <SectionLabel icon={icon} label={children} variant="subtitle1" />
      </NavLink>
    </div>
  );
};

export default NavItem;
