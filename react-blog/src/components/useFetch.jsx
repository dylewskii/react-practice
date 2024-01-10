import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [isPending, setIsPending] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          setError("could not fetch data");
          setIsPending(false);
          throw Error("could not fetch data");
        }
        return res.json();
      })
      .then(
        (data) => {
          //   console.log(data);
          setData(data);
          setIsPending(false);
          setError(null);
        },
        [url]
      );
  });

  return { data, isPending, error };
};

export default useFetch;
