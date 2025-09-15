import { useEffect, useState } from "react";

const useApi = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [flag]);

  const refetch = () => {
    setFlag(!flag);
  };

  return { data, loading, error, refetch };
};

export default useApi;
