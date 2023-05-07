import "./App.css";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
