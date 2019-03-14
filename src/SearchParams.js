import React, { useState } from "react";
import { ANIMALS } from "petfinder-client";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  //const location = "Temecula, CA";
  const [location, setLocation] = useState("Temecula, CA");
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breeds, setBreeds] = useState([]);
  const [breed, BreedDropdown] = useDropdown("Breed", "Havanese", breeds);

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
