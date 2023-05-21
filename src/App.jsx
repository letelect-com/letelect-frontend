import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, Register, Welcome } from "./pages";

const App = () => {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
