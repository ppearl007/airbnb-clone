// import { useState } from "react";
import "./App.css";
import "./components/Navbar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Cards";
import data from "./utils/data";

function App() {
  const cards = data.map((item) => (
    <Card
      key={item.id}
      img={item.img}
      title={item.title}
      rating={item.rating}
      reviewCount={item.reviewCount}
      location={item.location}
      cost={item.cost}
    />
  ));

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list"> {cards} </section>
    </div>
  );
}

export default App;
