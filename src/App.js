import "./App.css";
import Chart from "./component/Chart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Paginate from "./component/Paginate";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Chart />} />
          <Route path="/paginate" element={<Paginate />} />
          <Route path="/Chart" element={<Paginate />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
