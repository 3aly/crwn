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
import SignUp from "./compnents/sign-up/sign-up.component";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<HomePage />} />

          <Route path="shop/hats" element={<Hats />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
