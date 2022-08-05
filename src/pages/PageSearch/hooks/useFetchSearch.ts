import fetchJsonp from 'fetch-jsonp';
import { useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Props {
   url: string;
}

const useFetchSearch = ({ url }: Props) => {
   const [data, setData] = useState<any>([null]);
   const [loading, setLoading] = useState<boolean>(false);
   const { search } = useParams();

   const getSearch = async (): Promise<void> => {
      setLoading(true);
      await fetchJsonp(`https://api.deezer.com/search/playlist?q=${search}&output=jsonp`)
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
   }, [search]);

   return [data, loading];
};

export default useFetchSearch;
