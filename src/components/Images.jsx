import React, { useContext } from "react";
import { ImageContext } from "../App";
import Image from "./Image";
import Scaleton from "./Scaleton";
function Images() {
  const { response, isLoading, searchImage } = useContext(ImageContext);
  return (
    <>
      <h1 className="text-center text-2xl mt-5 underline">
        Results for {searchImage || "Cats"}
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-10 xl:grid-cols-4 max-w-7xl mx-auto px-4">
        {isLoading ? (
          <Scaleton item={10} />
        ) : (
          response.map((data, key) => <Image key={key} data={data} />)
        )}
      </div>
    </>
  );
}

export default Images;
