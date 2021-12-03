import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Notes, Create } from "./pages";
import FullWidthGrid from "./sandbox/grid/grid.component";
import StyledPaperExample from "./sandbox/styled/StyledPaper.component";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Notes />} />
        <Route path="/create" element={<Create />} />
        {/* <Route path="/sandbox" element={<StyledPaperExample />} /> */}
        <Route path="/sandbox" element={<FullWidthGrid />} />
      </Routes>
    </Router>
  );
};

export default App;
