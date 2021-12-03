// Video: https://www.youtube.com/watch?v=B7rDus0sMRw&lc=Ugxq-7IhPO3TOH1G_HZ4AaABAg

import React from "react";
import { Grid, Typography, Paper } from "@mui/material";
import { styled } from "@mui/system";

// styles
const gridStyles = {
  backgroundColor: "blue",
  marginTop: 2,
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: 500,
  paddingRight: 1,
  paddingBottom: 1,
};

// styled component
const Contents = styled(Paper)(({ theme }) => ({
  //...theme.typography.h6,
  padding: theme.spacing(1),
  textAlign: "center",
}));

const FullWidthGrid = () => {
  return (
    <Grid
      container
      sx={gridStyles}
      columns={16}
      // spacing={1}
      // or:
      rowSpacing={1}
      columnSpacing={1}
      // has the same effect
    >
      <Grid item xs={6} md={10}>
        <Contents>xs=6 md=10</Contents>
      </Grid>
      <Grid item xs={10} md={6}>
        <Contents>xs=6 md=10</Contents>
      </Grid>
      <Grid item xs={10} md={6}>
        <Contents>xs=10 md=6</Contents>
      </Grid>
      <Grid item xs={6} md={10}>
        <Contents>xs=6 md=10</Contents>
      </Grid>
    </Grid>
  );
};

export default FullWidthGrid;
