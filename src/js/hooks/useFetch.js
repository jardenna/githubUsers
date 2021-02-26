import { useState, useEffect } from 'react';


const useFetch = (initialUrl, method = 'get', skip = false, initialParams = {}, headers = {}, postData) => {
   const [url, updateUrl] = useState(initialUrl);
   const [params, updateParams] = useState(initialParams);
   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [hasError, setHasError] = useState(false);
   const [errorMessage, setErrorMessage] = useState('');

   //Add params to url
   const queryString = Object.keys(params)
      .map(key => `${key}=${params[key]}`)
      .join('&');


   useEffect(() => {
      const fetchData = async () => {
         if (skip)
            return setIsLoading(true);
         try {
            setIsLoading(true);
            const response = await fetch(`${url}${queryString}`,
               {
                  method: method.toUpperCase(),
                  body: JSON.stringify(postData),
                  credentials: 'same-origin',
                  headers: Object.assign({}, headers, { 'Content-Type': 'application/json' })

               }
            );
            const result = await response.json();
            if (response.ok) {
               setData(result);
            } else {
               setHasError(true);
               setErrorMessage(result);
            }
            setIsLoading(false);
         } catch (err) {
            setHasError(true);
            setErrorMessage(err.message);
            setIsLoading(false);
         } finally {
            setIsLoading(false);
         }
      };
      fetchData();
   }, [url]);



   return { data, isLoading, hasError, errorMessage, updateUrl, updateParams, skip };
};

export default useFetch;