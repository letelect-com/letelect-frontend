import React from "react";
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
import { RequireAuth } from "./context/RequireAuth";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path="/elections"
            element={
              <RequireAuth>
                <Elections />
              </RequireAuth>
            }
          />
          <Route
            path="/verification"
            element={
              <RequireAuth>
                <Verification />
              </RequireAuth>
            }
          />
          <Route
            path="/candidates"
            element={
              <RequireAuth>
                <Candidates />
              </RequireAuth>
            }
          />
          <Route
            path="/voters"
            element={
              <RequireAuth>
                <Voters />
              </RequireAuth>
            }
          />
          <Route
            path="/positions"
            element={
              <RequireAuth>
                <Positions />
              </RequireAuth>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
