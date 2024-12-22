import React from "react";
import PokedexGrid from "../components/PokedexGrid";
import PokemonTypeFilter from "../components/PokemonTypeFilter";

const Home = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center text-gray-800">Pokemon Explorer</h1>
      <p className="text-center text-gray-600 mt-2">
        Search, filter, and explore Pokemon!
      </p>
      <PokemonTypeFilter />
      <PokedexGrid />
    </div>
  );
};

export default Home;
