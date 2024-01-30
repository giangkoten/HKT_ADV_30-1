import "./App.css";
import HomePage from "./components/HomePage";
import Question from "./components/Question";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/question" element={<Question />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
