import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

const PokemonTypeFilter = () => {
  const { types, selectedTypes, setSelectedTypes } = useContext(PokemonContext);

  const toggleType = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {types.map((type) => (
        <button
          key={type}
          className={`px-4 py-2 text-sm rounded transition ${
            selectedTypes.includes(type)
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-blue-100"
          }`}
          onClick={() => toggleType(type)}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default PokemonTypeFilter;

