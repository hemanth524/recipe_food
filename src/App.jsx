import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Country from "./pages/Country";
import Individual from "./pages/Individual";
import Footer from "./pages/Footer";

function App() {
  const [Loggedin, setLoggedin] = useState(false);

  useEffect(() => {
    
    setLoggedin(Loggedin);
  }, []);



  return (
    <div className="flex flex-col w-screen h-full min-h-screen bg-blue-900">
      <Navbar Loggedin={Loggedin} setLoggedin={setLoggedin}  />
      <Routes>
        <Route path="/" element={<Home Loggedin={Loggedin} setLoggedin={setLoggedin} />} />
        <Route path="/country" element={<Country />} />
        <Route path="/individual" element={<Individual />} />
        <Route path="/login" element={<Login setLoggedin={setLoggedin} />} />
        <Route path="/signup" element={<Signup setLoggedin={setLoggedin} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
