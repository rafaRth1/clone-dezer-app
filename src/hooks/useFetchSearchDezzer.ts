import { useLayoutEffect, useState } from 'react';
import fetchJsonp from 'fetch-jsonp';
import { useParams } from 'react-router-dom';

const useFetchSearchDezzer = (url: string) => {
   const [data, setData] = useState<any>({ data: [], total: 0, next: '' });
   const [loading, setLoading] = useState<boolean>(false);
   const { search } = useParams();

   const getSearch = async (url: string): Promise<void> => {
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
      getSearch(url);
   }, [search]);

   return [data, loading];
};

export default useFetchSearchDezzer;
