import { createContext } from 'react';
import { ArtistPicture } from '../interfaces/interfacePictureArtist';
import { InitialStateProps } from '../reducers/appReducer';

interface AppContenxtProps {
   token: string;
   showModalChannel: boolean;
   setShowModalChannel: React.Dispatch<React.SetStateAction<boolean>>;
   isLogin: boolean;
   setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
   /* addArtistFavorite: (artist: ArtistPicture[]) => void; */
   artistsFavorites: any[];
   setArtistsFavorites: React.Dispatch<React.SetStateAction<any[]>>;
}

export const AppContext = createContext<AppContenxtProps>({} as AppContenxtProps);
