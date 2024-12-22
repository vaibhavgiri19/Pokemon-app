import React from "react";

const PokemonCard = ({ id, name, sprite, types }) => (
  <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center transition transform hover:scale-105">
    <img src={sprite} alt={name} className="w-24 h-24 mb-2" />
    <h2 className="text-lg font-bold capitalize">{name}</h2>
    <p className="text-gray-500">#{id}</p>
    <div className="flex gap-2 mt-2">
      {types.map((type) => (
        <span
          key={type}
          className="px-2 py-1 bg-blue-100 text-blue-600 text-sm rounded-full capitalize"
        >
          {type}
        </span>
      ))}
    </div>
  </div>
);

export default PokemonCard;
