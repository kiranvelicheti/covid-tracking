import React, { useEffect, useState } from "react";
import TestStatus from "./TestStatus";
import { Typography } from "@material-ui/core";

const Status = () => {
    return (<div>
        <Typography variant="h4"> COVID- 19 Tracking</Typography>
        <TestStatus></TestStatus>
    </div>);
}

export default Status