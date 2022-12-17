import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Viewinfo from "./components/Viewinfo/Viewinfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viewinfo" element={<Viewinfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
