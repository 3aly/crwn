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

import { useEffect } from "react";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";

import Hats from "./pages/hats";
import Nav from "./pages/navbar/nav.components";
import Authpage from "./pages/authpage/authpage.jsx";
import Shop from "./pages/shop/shop.component";
import CheckOut from "./pages/CheckOut/CheckOut";
import { setCurrentUser } from "./store/user/user.action";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<HomePage />} />

          <Route path="shop" element={<Shop />} />
          <Route path="checkout" element={<CheckOut />} />

          <Route path="shop/hats" element={<Hats />} />
          <Route path="auth" element={<Authpage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
