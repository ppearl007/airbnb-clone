// import { useState } from "react";
import "./App.css";
import "./components/Navbar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Cards";
import data from "./utils/data";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      {data.map((item, index) => (
        <Card
          key={index}
          img={item.img}
          title={item.title}
          rating={item.rating}
          reviewCount={item.reviewCount}
          location={item.location}
          cost={item.cost}
        />
      ))}
    </div>
  );
}

export default App;
