import { Box } from "@mui/system";
import { Drawer, Typography } from "@mui/material";
import React from "react";

// Styled
import layoutStyles from "./layout.styles";

const Layout = ({ children }) => {
  return (
    <Box sx={layoutStyles.root}>
      {/* app bar */}
      {/* side drawer */}
      <Drawer
        // Use the css API to override the styling of sub-components of mui components : https://mui.com/api/drawer/#css
        sx={{
          ...layoutStyles.drawer,
          "& .MuiDrawer-paper": layoutStyles.drawerPaper,
        }}
        variant="permanent"
        anchor="left"
      >
        <Box>
          <Typography variant="h5">Ninja Notes</Typography>
        </Box>
      </Drawer>
      <Box sx={layoutStyles.page}>{children}</Box>
    </Box>
  );
};

export default Layout;
