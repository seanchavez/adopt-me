import React, { useState, useEffect } from "react";
import pf, { ANIMALS } from "petfinder-client";
import useDropdown from "./useDropdown";
import petfinderClient from "petfinder-client";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

const SearchParams = () => {
  //const location = "Temecula, CA";
  const [location, setLocation] = useState("Temecula, CA");
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breeds, setBreeds] = useState([]);
  const [breed, BreedDropdown] = useDropdown("Breed", "Havanese", breeds);

  useEffect(() => {
    petfinder.breed.list({ animal }).then(console.log, console.error);
  });

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
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
