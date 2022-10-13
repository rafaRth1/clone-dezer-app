import { useLayoutEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import fetchJsonp from 'fetch-jsonp';
import { useContextDeezer } from '../../hooks/useContextDeezer';
import { SearchNavBar } from './components';

export const Search = () => {
	const { setValueSearch, setLoading } = useContextDeezer();
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
