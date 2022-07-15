import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

interface AppContenxtProps {
   isLogin: boolean;
   setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const useProvider = () => {
   return useContext<AppContenxtProps>(AppContext);
};

export default useProvider();
