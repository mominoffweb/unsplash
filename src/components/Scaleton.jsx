import React from "react";

function Scaleton({ item }) {
  return [...Array(item).keys()].map(() => {
    <div className="animate-pulse">
      <div className="bg-gray-300  rounded-lg h-72"></div>
      
    </div>;
  });
}

export default Scaleton;
