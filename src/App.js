import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Pages/Shared/Header";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import CheckOut from "./Pages/CheckOut/CheckOut";
import Footer from "./Pages/Shared/Footer";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <CheckOut />
            </RequireAuth>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
