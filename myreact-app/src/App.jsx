import React from "react";
import { PokemonProvider } from "./context/PokemonContext";
import PokedexGrid from "./components/PokedexGrid";
import PokemonTypeFilter from "./components/PokemonTypeFilter";

function App() {
  return (
    
    <PokemonProvider>
      <div className="min-h-screen bg-gray-100 p-4">
        <h1 className="text-3xl font-bold text-center mb-6">Pokemon Explorer</h1>

        <PokemonTypeFilter />
        <PokedexGrid />
      </div>
    </PokemonProvider>
    
  );
}

export default App;
