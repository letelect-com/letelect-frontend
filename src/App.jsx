import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Dashboard,
  Elections,
  Verification,
  Home,
  Login,
  Register,
  Candidates,
  Voters,
  Positions,
  NotFoundPage,
} from "./pages";

const App = () => {
  return (
    <React.Fragment className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/elections" element={<Elections />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/voters" element={<Voters />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
