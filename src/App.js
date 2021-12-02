import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Notes, Create } from "./pages";
import StyledPaperExample from "./sandbox/StyledPaper.component";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Notes />} />
        <Route path="/create" element={<Create />} />
        <Route path="/sandbox" element={<StyledPaperExample />} />
      </Routes>
    </Router>
  );
};

export default App;
