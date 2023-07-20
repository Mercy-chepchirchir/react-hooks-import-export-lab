import React from "react";
import About from "../components/About";
import Home from "../components/Home";
import NavBar from "../components/NavBar";
// import image from "../components/About";
import {username} from "../data/user";
function App() {
  console.log(username)

  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
