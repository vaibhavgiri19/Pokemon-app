import React, { createContext, useState, useEffect } from "react";
import { fetchPokemonList, fetchTypes } from "../utils/api";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    async function getPokemon() {
      const pokemon = await fetchPokemonList();
      setPokemonList(pokemon);
      setFilteredPokemon(pokemon);
    }

    async function getTypes() {
      const availableTypes = await fetchTypes();
      setTypes(availableTypes);
    }

    getPokemon();
    getTypes();
  }, []);

  const filterPokemon = () => {
    let filtered = pokemonList;

    if (searchTerm) {
      filtered = filtered.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedTypes.length > 0) {
      filtered = filtered.filter((pokemon) =>
        selectedTypes.every((type) => pokemon.types.includes(type))
      );
    }

    setFilteredPokemon(filtered);
  };

  useEffect(() => {
    filterPokemon();
  }, [searchTerm, selectedTypes]);

  return (
    <PokemonContext.Provider
      value={{
        pokemonList: filteredPokemon,
        searchTerm,
        setSearchTerm,
        selectedTypes,
        setSelectedTypes,
        types,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
