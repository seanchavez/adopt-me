import React from "react";
import { Link } from "@reach/router";
import { PetMedia, PetPhoto } from "petfinder-client";

interface Iprops {
  name: string;
  animal: string;
  breed: string;
  media: PetMedia;
  location: string;
  id: string;
}

const Pet = (props: Iprops) => {
  const { name, animal, breed, media, location, id } = props;
  let photos: PetPhoto[] = [];
  if (media && media.photos && media.photos.photo) {
    photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
  }

  let hero = "http://placecorgi.com/300/300";
  if (photos[0] && photos[0].value) {
    hero = photos[0].value;
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;

// import React from "react";
// import { Link } from "@reach/router";

// const Pet = ({ name, animal, breed, media, location, id }) => {
//   const hero = media.photos.photo[0].value;
//   return (
//     <Link to={`/details/${id}`} className="pet">
//       <div className="image-container">
//         <img src={hero} alt="{name}" />
//       </div>
//       <div className="info">
//         <h1>{name}</h1>
//         <h2>
//           {animal} - {breed} - {location}
//         </h2>
//       </div>
//     </Link>
//   );
// };

// export default Pet;
