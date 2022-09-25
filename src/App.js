import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { BrowserRouter, Switch, Route, Link, Routes } from "react-router-dom";
import Hats from "./pages/hats";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop/hats" element={<Hats />} />
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;
