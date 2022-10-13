import { useState } from 'react';
import { useAxiosFetchSpotify } from '../../hooks/useAxiosFetchSpotify';
import { useContextDeezer } from '../../hooks/useContextDeezer';

export const useModalChannel = () => {
	const [valueSearch, setValueSearch] = useState('');
	const [activeEffetcPicture, setActiveEffetcPicture] = useState(false);
	const { artistsFavorites, setArtistsFavorites } = useContextDeezer();

	const [getArtist, loading] = useAxiosFetchSpotify(
		`/search?q=${valueSearch.length === 0 ? 'a' : valueSearch}&type=artist&market=ES&limit=50`
	);

	const handleAddArtist = (artist: any) => {
		const exists = artistsFavorites.some((artistFavorite) => artistFavorite.id === artist.id);

		if (exists) {
			const arrayArtistsFavorite = artistsFavorites.filter((artistFavorite) => artistFavorite.id !== artist.id);
			setArtistsFavorites([...arrayArtistsFavorite]);
		} else {
			setArtistsFavorites([...artistsFavorites, artist]);
		}

		const artistContainerItems: any = document.querySelectorAll('.artists-card');
		const iconHear = document.querySelectorAll('.icon-add-favorite');

		for (let i = 0; i < artistContainerItems.length; i++) {
			if (artistContainerItems[i]?.dataset.id === artist.id) {
				artistContainerItems[i].classList.toggle('bg-active-favorite-artist');
				iconHear[i].classList.toggle('active-favorite-artist');
			}
		}
	};

	return {
		valueSearch,
		setValueSearch,
		activeEffetcPicture,
		setActiveEffetcPicture,
		getArtist,
		loading,
		handleAddArtist,
	};
};
