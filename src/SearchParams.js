import React, { useState } from "react";
import { ANIMALS } from "petfinder-client";

const SearchParams = () => {
  //const location = "Temecula, CA";
  const [location, setLocation] = useState("Temecula, CA");
  const [animal, setAnimal] = useState("dog");
  const [breeds, setBreeds] = useState([]);

  const [breed, setBreed] = useState("Havanese");

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
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={e => setAnimal(e.target.value)}
            onBlur={e => setAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map(animal => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            value={breed}
            id="breed"
            onChange={e => setBreed(e.target.value)}
            onBlur={e => setBreed(e.target.value)}
            disabled={!breeds.length}
          >
            <option />
            {breeds.map(breed => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
