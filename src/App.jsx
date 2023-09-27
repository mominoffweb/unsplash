import Home from "./components/Home";
import SearchField from "./components/SearchField";
import Images from "./components/Images";
import useAxios from "./components/hooks/UseAxios";
import { createContext, useState } from "react";

export const ImageContext = createContext();

const REACT_APP_ACCESS_KEY = "algsuieqmR9vmNcmtLlD-0345kiyMD5FYXIeT-I7rUI";

function App() {
  
  const [searchImage, setSearchImage] = useState(" ");
  const { response, isLoading, error, fetchData } = useAxios(
    `search/photos?page=5&query=cars&client_id=${REACT_APP_ACCESS_KEY}`
  );
  console.log(response);

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage
  };

  return (
    <ImageContext.Provider value={value}>
      <Home>
        <SearchField />
      </Home>
      <Images />
    </ImageContext.Provider>
  );
}

export default App;
