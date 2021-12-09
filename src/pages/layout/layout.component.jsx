import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

// components
import { Box } from "@mui/system";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  AppBar,
  Toolbar,
  Avatar,
} from "@mui/material";
import { format } from "date-fns";

//icons
import { AddCircleTwoTone, SubjectTwoTone } from "@mui/icons-material";

// Styles
import layoutStyles from "./layout.styles";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectTwoTone color="secondary" />,
      path: "/",
    },
    {
      text: "Create Note",
      icon: <AddCircleTwoTone color="secondary" />,
      path: "/create",
    },
  ];

  return (
    <Box sx={layoutStyles.root}>
      {/* app bar */}
      <AppBar sx={layoutStyles.appbar} elevation={0}>
        <Toolbar>
          {/* Will take all the horizontal space available to it, which is why it pushes the name all the way to the right */}
          <Typography sx={{ flexGrow: 1 }}>
            Today is {format(new Date(), "MMMM do Y")}
          </Typography>
          <Typography>Ein</Typography>
          <Avatar sx={layoutStyles.avatar} src= "/ein.jpg" />
        </Toolbar>
      </AppBar>
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
          <Typography sx={layoutStyles.title} variant="h5">
            Ninja Notes
          </Typography>
        </Box>
        <List>
          {menuItems.map((menuItem, index) => (
            <ListItem
              sx={
                location.pathname === menuItem.path ? layoutStyles.active : null
              }
              button
              key={index}
              onClick={() => navigate(menuItem.path)}
            >
              <ListItemIcon>{menuItem.icon}</ListItemIcon>
              <ListItemText primary={menuItem.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box sx={layoutStyles.page}>
        <Box sx={{ ...layoutStyles.toolbar, marginTop: 2 }} />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
