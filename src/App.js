import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Shop from "./components/Shop";
import Menu from "./components/Menu";
import Clients from "./components/Clients";
import Prices from "./components/Prices";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header className="header_nav">
        <Navbar />
      </header>
      <section id="home">
        <Header />
      </section>
      <section id="prices">
        <Prices />
      </section>

      <section id="menu">
        <Menu />
      </section>
      <section id="shop">
        <Shop />
      </section>
      <section id="clients">
        <Clients />
      </section>
      <section id="about">
        <About />
      </section>
    </div>
  );
}

export default App;
