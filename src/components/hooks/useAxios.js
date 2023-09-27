import axios from "axios";
import { useEffect, useState } from "react";


const useAxios = (param) => {
  const [response, setResponse] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState("");

  axios.defaults.baseURL = "https://api.unsplash.com";

  const fetchData = async (url) => {
    try {
      setIsloading(true);
      const res = await axios(url);
      setResponse(res.data.results);
    } catch (err) {
      setError(err);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    fetchData(param);
  }, [param]);



  return {
    response,
    isloading,
    error,
    fetchData: (url) => fetchData(url),
  };
};

export default useAxios;


let c = 45;

function draw() {
  document.documentElement.style.setProperty("--direction", c++ + "deg");
  requestAnimationFrame(draw);
}

requestAnimationFrame(draw);