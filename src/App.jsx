import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";

const App = () => {
  return (
    <div className="px-[5%]">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
