import axios from 'axios';
import { useEffect, useState } from 'react';
import { baseURLSpotify } from '../config';
import { useContextDeezer } from './useContextDeezer';

export const useAxiosFetchSpotify = (url: string) => {
	const [data, setData] = useState<any>(null);
	const [loading, setLoading] = useState(false);
	const { token } = useContextDeezer();

	const fetchData = async (): Promise<void> => {
		try {
			setLoading(true);
			const response = await axios.get(`${baseURLSpotify}${url}`, {
				headers: { Authorization: `Bearer ${token}` },
				method: 'GET',
			});
			setData(response.data);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return [data, loading];
};
