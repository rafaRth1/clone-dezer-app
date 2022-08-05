import fetchJsonp from 'fetch-jsonp';
import { useContext, useLayoutEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import useFetchSearchDezzer from '../../hooks/useFetchSearchDezzer';
import SearchNavBar from './components/SearchNavBar';

const Search = () => {
   const { setValueSearch, setLoading } = useContext(AppContext);
   const { search } = useParams();

   useLayoutEffect(() => {
      const getSearch = async () => {
         setLoading(true);
         await fetchJsonp(`https://api.deezer.com/search?q=${search}&output=jsonp`)
            .then(function (response) {
               return response.json();
            })
            .then((json) => setValueSearch(json?.data))
            .catch(function (error) {
               console.log(error);
            });
         setLoading(false);
      };
      getSearch();
   }, [search]);

   return (
      <main className='page-main-search'>
         <SearchNavBar search={search} />
         <Outlet />
      </main>
   );
};

export default Search;
