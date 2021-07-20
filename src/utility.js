import React , { useState , useEffect}from "react";


const useFetch = url => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(async () => {
    const response = await fetch(url);
    const data = await response.json();
    const [ item ] = data;
    setData(data);
    console.log(data)
    setLoading(false);
  }, []);
  return { data, loading };
};

export default useFetch;