import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
//import { createTheme } from "@mui/material";

// theme
import ourTheme from "./assets/our-theme";

// components
import Notes from "./pages/notes/notes.component";
import Create from "./pages/create/create.component";
import FullWidthGrid from "./sandbox/grid/grid.component";
import { Layout } from "./pages";
//import StyledPaperExample from "./sandbox/styled/styled-paper.component";

// const ourTheme = createTheme({
//   palette: {
//     primary: {
//       main: "#fefefe",
//     },
//   },
// });

const App = () => {
  console.log(ourTheme);
  return (
    <ThemeProvider theme={ourTheme}>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Notes />} />
            <Route path="/create" element={<Create />} />
            {/* <Route path="/sandbox" element={<StyledPaperExample />} /> */}
            <Route path="/sandbox" element={<FullWidthGrid />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
