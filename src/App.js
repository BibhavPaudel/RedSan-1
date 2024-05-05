import "./App.css";
import { Login } from "./pages/Login/Login";
import Index from "./pages/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useSelector } from "react-redux";
import Tejis from "./pages/Tejis";
import IOT from "./pages/components/Courses/IOT";
import Python from "./pages/components/Courses/Python";
import Robotics from "./pages/components/Courses/Robotics";
import SpinTheWheel from "./pages/components/Games/SpinTheWheel";

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
          <Route path="/tejis" element={<Tejis />}></Route>
          <Route path="/IOT" element={<IOT />}></Route>
          <Route path="/python" element={<Python />}></Route>
          <Route path="/robotics" element={<Robotics />}></Route>
          <Route path="/spinthewheel" element={<SpinTheWheel />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
