import React, { useState, useEffect, useContext } from "react";
import ThemeContext from "./ThemeContext";
import pf, { ANIMALS } from "petfinder-client";
import isNode from "is-node";
import useDropdown from "./useDropdown";
import Results from "./Results";

let petfinder;

if (!isNode) {
  petfinder = pf({
    secret: process.env.API_SECRET,
    key: process.env.API_KEY
  });
}

const SearchParams = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const [pets, setPets] = useState([]);
  const [location, setLocation] = useState("Temecula, CA");
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breeds, setBreeds] = useState([]);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

  function requestPets() {
    petfinder.pet
      .find({
        location,
        breed,
        animal,
        output: "full"
      })
      .then(res => {
        setPets(
          Array.isArray(res.petfinder.pets.pet)
            ? res.petfinder.pets.pet
            : [res.petfinder.pets.pet]
        );
      });
  }

  // async function requestPets() {
  //   const res = await petfinder.pet.find({
  //     location,
  //     breed,
  //     animal,
  //     output: "full"
  //   });
  //   setPets(res.petfinder.pets.pet);
  // }

  // useEffect(() => {
  //   setBreed("");
  //   setBreeds([]);
  //   petfinder.breed.list({ animal }).then(res => {
  //     setBreeds(res.petfinder.breeds.breed);
  //   }, console.error);
  // }, [animal]);

  return (
    <div className="search-params">
      <form>
        <label htmlFor={"location"}>
          Location
          <input
            onChange={e => setLocation(e.target.value)}
            id="location"
            value={location}
            placeholder="location"
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <label htmlFor="theme">
          Theme
          <select
            id="theme"
            value={theme}
            onChange={e => setTheme(e.target.value)}
            onBlur={e => setTheme(e.target.value)}
          >
            <option value="dakblue">Dark Blue</option>
            <option value="peru">Peru</option>
            <option value="mediumaquamarine">Medium Aquamarine</option>
            <option value="rebeccapurple">Rebecca Purple</option>
          </select>
        </label>
        <button
          onSubmit={e => {
            e.preventDefault();
            requestPets();
          }}
          style={{ backgroundColor: theme }}
        >
          Submit
        </button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
