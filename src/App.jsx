import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./components/data";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div>
      <Navbar />
      <Hero />
      {cards}
    </div>
  );
}

export default App;
