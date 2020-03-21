import React from "react";
import "../styles/main-body.scss";
import { Switch, Route, Redirect, HashRouter } from "react-router-dom";
import SideNav from "./SideNav";
import Status from "./Status";

const MainBody = () => {
  return (
    <HashRouter>
      <SideNav />
      <Switch>
        <Route exact path="/date">
          <Status />
        </Route>
        {/* <Route exact path="/vehicles">
          <VehicleList />
        </Route>
        <Route exact path="/noVehicles">
          <NoVehicle />
        </Route>
        <Route exact path="/service-area">
          <ServiceAreaList />
        </Route> */}
        {/* For now */}
        <Redirect to="/date"></Redirect>
      </Switch>
    </HashRouter>
  );
};

export default MainBody;
