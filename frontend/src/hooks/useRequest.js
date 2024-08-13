import {useEffect, useState} from "react";

export default function useRequest(request) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(true);
    const [data,setData] = useState([]);
    useEffect(() => {
      request()
          .then(data => data.json())
          .then(data => setData(prev=>data))
          .catch(()=> setError(true))
          .finally(() => setLoading(false));
    },[])
    return[loading, data, error];
}