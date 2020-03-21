import React from "react";
import appLogo from "../Images/covid-19.jpg";
import NavItem from "./NavItem";
import { Box } from "@material-ui/core";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
const SideNav = () => {
  return (
    <div className="sidenav">
      <div className="sidenav-upper">
        <Box m={4}>
          <img src={appLogo} alt="logo" height="200%" width="100%" />
        </Box>
      </div>
      <nav>
        <NavItem path="/date" icon={<CalendarTodayIcon fontSize="small" />}>
          By Date
        </NavItem>
      </nav>
    </div>
  );
};

export default SideNav;
