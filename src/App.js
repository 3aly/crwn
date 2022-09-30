import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Routes,
  Outlet,
} from "react-router-dom";
import Hats from "./pages/hats";
import Nav from "./pages/navbar/nav.components";
import Authpage from "./pages/authpage/authpage.jsx";
import Shop from "./pages/shop/shop.component";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<HomePage />} />

          <Route path="shop" element={<Shop />} />

          <Route path="shop/hats" element={<Hats />} />
          <Route path="auth" element={<Authpage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
