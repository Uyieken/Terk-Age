import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Welcome from "./components/Welcome/Welcome";
import Offer from "./components/Offer/Offer";
import Projects from "./components/Projects/Projects";
import Reviews from "./components/Reviews/Reviews";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Welcome />
      <Offer />
      <Projects />
      <Reviews />
      <Footer />
    </>
  );
}

export default App;
