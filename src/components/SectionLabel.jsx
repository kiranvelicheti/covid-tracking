import React from "react";
import { Grid, Typography } from "@material-ui/core";

const SectionLabel = ({ icon, label, variant }) => {
  return (
    <Grid container spacing={1}>
      <Grid item>{icon}</Grid>
      <Grid item>
        <Typography variant={variant}>{label}</Typography>
      </Grid>
    </Grid>
  );
};

export default SectionLabel;
