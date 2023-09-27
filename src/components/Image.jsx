import React from "react";

function Image({ data }) {
  return (
    <a href={data.urls.regular} target="_blank" rel="noreferrer">
      <img
        className="h-72 img  hover:scale-95 transition duration-300 md:h-48  w-full object-cover rounded-lg shadow-md"
        src={data.urls.small}
        alt={data.alt_description}
      />
    </a>
  );
}

export default Image;
