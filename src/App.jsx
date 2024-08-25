import React from "react";
import Header from "./components/Headers/Header";
import Lider from "./components/Slider/Lider";
import Production from "./components/Production/Production";
import Genneramovilist from "./components/Genneramovilist/Genneramovilist";

const App = () => {
  return (
    <div className="all">
      <Header />
      <Lider />
      <Production />
      <Genneramovilist />
    </div>
  );
};

export default App;
