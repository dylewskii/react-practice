import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [isPending, setIsPending] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
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
      )
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });

    return () => {
      abortCont.abort();
    };
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
