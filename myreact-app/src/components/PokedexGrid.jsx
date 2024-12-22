import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import PokemonCard from "./PokemonCard";

const PokedexGrid = () => {
  const { pokemonList, setSearchTerm } = useContext(PokemonContext);

  return (
    <div>
      <input
        type="text"
        placeholder="Search Pokemon..."
        className="w-full p-2 mb-4 border rounded"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.id} {...pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokedexGrid;
