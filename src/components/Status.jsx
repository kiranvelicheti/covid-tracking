import React, { useEffect, useState } from "react";
import TestStatus from "./TestStatus";
import { Typography, Grid } from "@material-ui/core";

const Status = () => {
    return (<div>
        <Typography variant="h4"> COVID- 19 Tracking</Typography>
        <Grid container>
            <Grid><TestStatus></TestStatus></Grid>
        </Grid>

    </div>);
}

export default Status