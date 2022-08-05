import { useLayoutEffect, useState } from 'react';
import fetchJsonp from 'fetch-jsonp';

interface Props {
   url: string;
}

const useFetchDezzer = ({ url }: Props) => {
   const [data, setData] = useState<any>([null]);
   const [loading, setLoading] = useState<boolean>(false);

   const getSearch = async (): Promise<void> => {
      setLoading(true);
      await fetchJsonp(`https://api.deezer.com${url}`)
         .then(function (response) {
            return response.json();
         })
         .then((json) => setData(json))
         .catch(function (error) {
            console.log(error);
         });
      setLoading(false);
   };

   useLayoutEffect(() => {
      getSearch();
   }, []);

   return [data, loading];
};

export default useFetchDezzer;
