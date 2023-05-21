import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard, Elections, Home, Login, Register } from "./pages";

const App = () => {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/elections" element={<Elections />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
