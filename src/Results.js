import React from "react";
import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search" datat-testid="search-results">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map(pet => {
          return (
            <Pet
              animal={pet.animal}
              key={pet.id}
              name={pet.name}
              breed={pet.breeds.breed}
              media={pet.media}
              location={`${pet.contact.city}, ${pet.contact.state}`}
              id={pet.id}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
