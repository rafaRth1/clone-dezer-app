import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { baseURLSpotify } from '../config';
import { AppContext } from '../context/AppContext';

export const fetchArtist = () => {
	const [data, setData] = useState<any>(null);
	const { token, setShowModalChannel } = useContext(AppContext);

	const handleAddArtist = async (): Promise<void> => {
		try {
			const result = await axios.get<any>(
				`${baseURLSpotify}/search?q=a&type=artist&market=ES&limit=50`,
				{
					method: 'GET',
					headers: { Authorization: `Bearer ${token}` },
				}
			);
			// setIdsArtists(result);
			console.log(result);
			setShowModalChannel(true);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		handleAddArtist();
	}, []);
};
