import { useContext } from 'react';
import { AppContext } from '../context';

export const useContextDeezer = () => {
	return useContext(AppContext);
};
