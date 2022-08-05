import { createContext } from 'react';
import { Track, Tracks } from '../interfaces/interfacePlaylist';
import { SearchResult } from '../interfaces/interfaceSearch';

interface AppContenxtProps {
   token: string;
   showModalChannel: boolean;
   setShowModalChannel: React.Dispatch<React.SetStateAction<boolean>>;
   showModalNotification: boolean;
   setShowModalNotification: React.Dispatch<React.SetStateAction<boolean>>;
   isLogin: boolean;
   setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
   artistsFavorites: any[];
   setArtistsFavorites: React.Dispatch<React.SetStateAction<any[]>>;
   valueSearch: SearchResult[];
   setValueSearch: React.Dispatch<React.SetStateAction<SearchResult[]>>;
   loading: boolean;
   setLoading: React.Dispatch<React.SetStateAction<boolean>>;
   handlePlayMusic: () => void;
   getArrayMusic: Track[];
   setGetArrayMusic: React.Dispatch<React.SetStateAction<Track[]>>;
   currentTrack: number;
}

export const AppContext = createContext<AppContenxtProps>({} as AppContenxtProps);
