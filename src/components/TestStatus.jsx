import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getStateFullName } from "../util/StateAbbrevation";
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from "@material-ui/core";
import _ from "lodash";

const getDailyStatus = () => {
    return fetch("https://covidtracking.com/api/states/daily").then(response => response.json());
};

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
    expandedPanel: {
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, .03)",
        borderBottom: "1px solid rgba(0, 0, 0, .125)",
        marginBottom: -1,
        minHeight: 56,
        "&$expanded": {
            minHeight: 56
        },
        square: true
    }
});


const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);


const TestStatus = () => {
    const classes = useStyles();

    const [statesMap, setStatesMap] = useState([]);

    useEffect(() => {
        getDailyStatus().then(statesData => {
            setStatesMap(_.groupBy(statesData, "dateChecked"));
        });
    }, []);

    return (
        _.keysIn(statesMap)
            .map(date => {
                var states = statesMap[date];
                return <div>
                    <ExpansionPanel>
                        <ExpansionPanelSummary id={date} className={classes.expandedPanel}>{_.split(date, 'T', 1)}</ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <TableContainer component={Paper}>
                                <Table className={classes.table} aria-label="customized table">
                                    <TableHead>
                                        <StyledTableRow>
                                            <StyledTableCell align="center">State</StyledTableCell>
                                            <StyledTableCell align="center">Positive</StyledTableCell>
                                            <StyledTableCell align="center">Negative</StyledTableCell>
                                            <StyledTableCell align="center">Pending</StyledTableCell>
                                            <StyledTableCell align="center">Death</StyledTableCell>
                                        </StyledTableRow>
                                    </TableHead>
                                    <TableBody>
                                        {states.map(state => (
                                            <StyledTableRow key={state.state}>
                                                <StyledTableCell align="center">{getStateFullName(state.state)}</StyledTableCell>
                                                <StyledTableCell align="center">{state.positive ? state.positive : 0}</StyledTableCell>
                                                <StyledTableCell align="center">{state.negative ? state.negative : 0}</StyledTableCell>
                                                <StyledTableCell align="center">{state.pending ? state.pending : 0}</StyledTableCell>
                                                <StyledTableCell align="center">{state.death ? state.death : 0}</StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
            })
    );
}
export default TestStatus;