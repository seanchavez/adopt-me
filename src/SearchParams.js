import React, { useState } from "react";
import { ANIMALS } from "petfinder-client";

const SearchParams = () => {
  //const location = "Temecula, CA";
  const [location, setLocation] = useState("Temecula, CA");
  const [animal, setAnimal] = useState("dog");

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
          >
            <option />
          </select
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
