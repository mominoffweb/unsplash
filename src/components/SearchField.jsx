import React, { useContext, useState } from "react";
import { ImageContext } from "../App";

const REACT_APP_ACCESS_KEY = "algsuieqmR9vmNcmtLlD-0345kiyMD5FYXIeT-I7rUI";

function SearchField() {
  const [searchValue, setSerchValue] = useState("");
  const { fetchData, setSearchImage } = useContext(ImageContext);
  const handleInputChange = (e) => {
    setSerchValue(e.target.value);
  };

  const handleBattenSearch = () => {
    fetchData(
      `search/photos?page=1&query=${searchValue}&client_id=${REACT_APP_ACCESS_KEY}`
    );
    setSerchValue("");
    setSearchImage(searchValue)
  };

  const handleEnterSearch = (e) => {
    if (e.key === "Enter") {
      fetchData(
        `search/photos?page=1&query=${searchValue}&client_id=${REACT_APP_ACCESS_KEY}`
      );
      setSerchValue("");
       setSearchImage(searchValue);
    }
  };

  

  return (
    <div className="flex">
      <input
        type="search"
        className="input bg-slate-800 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl text-gray-300 rounded-bl"
        placeholder="Search Anthing..."
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleEnterSearch}
      />
      <button
        onClick={handleBattenSearch}
        disabled={!searchValue}
        className="bg-blue-600 px-6  btnn  focus:ring-2 py-3 ml-2  disabled:bg-gray-400 focus:ring-blue-300 text-white rounded-md cursor-pointer  "
      >
        Serach
      </button>
    </div>
  );
}

export default SearchField;
