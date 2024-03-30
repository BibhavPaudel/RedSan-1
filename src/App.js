import "./App.css";
import { Login } from "./pages/Login/Login";
import Index from "./pages/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useSelector } from "react-redux";
import LaunchEvent from "./pages/LaunchEvent";
import FreeCoupon from "./pages/FreeCoupon";
import TreasureHunt from "./pages/TreasureHunt";
import Coupon from "./pages/Coupon";

function App() {
  const loginState = useSelector((state) => state.login);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={loginState.length === 0 ? <Login /> : <Index />}
          ></Route>
          <Route path="/launchevent" element={<LaunchEvent />}></Route>
          <Route path="/freeCoupons" element={<FreeCoupon />}></Route>
          <Route path="/treasureHunt" element={<TreasureHunt />}></Route>
          <Route path="/coupons" element={<Coupon />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
