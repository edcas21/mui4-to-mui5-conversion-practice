import React from "react";

// components
import { Box } from "@mui/system";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

//icons
import { AddCircleTwoTone, SubjectTwoTone } from "@mui/icons-material";

// Styles
import layoutStyles from "./layout.styles";

const Layout = ({ children }) => {
  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectTwoTone color="secondary" />,
      path: "/",
    },
    {
      text: "Create Note",
      icon: <AddCircleTwoTone color="secondary" />,
      path: "/",
    },
  ];

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
        <List>
          {menuItems.map((menuItem, index) => (
            <ListItem key={index}>
              <ListItemText primary={menuItem.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box sx={layoutStyles.page}>{children}</Box>
    </Box>
  );
};

export default Layout;
