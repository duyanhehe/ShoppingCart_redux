import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/Layout/DefaultLayout";
import Home from "./components/Page/Home";
import Cart from "./components/Page/Cart";
import Login from "./components/Page/Login";
import SignUp from "./components/Page/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
