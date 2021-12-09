import ourTheme from "../../assets/our-theme";

const drawerWidth = 240;

const layoutStyles = {
  page: {
    background: "#f9f9f9",
    width: "100%",
    padding: ourTheme.spacing(3),
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  root: {
    display: "flex",
  },
  active: {
    background: "#f4f4f4",
  },
  title: {
    padding: ourTheme.spacing(2),
  },
  appbar: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  toolbar: ourTheme.mixins.toolbar,
};

export default layoutStyles;
