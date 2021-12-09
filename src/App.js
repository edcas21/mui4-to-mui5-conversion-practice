import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";

// theme
import ourTheme from "./assets/our-theme";

// components
import Notes from "./pages/notes/notes.component";
import Create from "./pages/create/create.component";
import FullWidthGrid from "./sandbox/grid/grid.component";
import { Layout } from "./pages";

// Styled reusable components that carry around their styling no matter where you use them
//import StyledPaperExample from "./sandbox/styled/styled-paper.component";

// Theme is in our-theme.js

const App = () => {
  console.log(ourTheme);
  return (
    <ThemeProvider theme={ourTheme}>
      <Router>
        <Layout>
            <Routes> {/* No more <Switch> */}
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
