import { useContext } from 'react';
import { AppContenxtProps, AppContext } from '../context/AppContext';

const useProvider = () => {
	return useContext<AppContenxtProps>(AppContext);
};

export default useProvider();
