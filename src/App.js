import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import CustomCursor from "./Components/CustomCursor/CustomCursor";

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
