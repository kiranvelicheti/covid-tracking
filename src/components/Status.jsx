import React, { useEffect, useState } from "react";
import TestStatus from "./TestStatus";
import { Typography, Grid } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Cummulative from "./Cummulative";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        width: "100vh"
    },
}));

const Status = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (<div className={classes.root}>
        <Grid container>
            <Grid item xs={24} sm={12}>
                <Typography variant="h4" style={{ justifyContent: "center" }}>COVID-19 Tracking</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <AppBar position="static" style={{ width: "110vh" }}>
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                        <Tab label="By Date" {...a11yProps(0)} />
                        <Tab label="By State" {...a11yProps(1)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <Grid><TestStatus></TestStatus></Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Grid ><Cummulative></Cummulative></Grid>
                </TabPanel>
            </Grid>
        </Grid>
    </div >);
}

export default Status