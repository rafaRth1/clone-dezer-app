import { useState } from 'react';
import { AppContext } from './AppContext';
import useGetToken from '../hooks/useGetToken';
import { SearchResult } from '../interfaces/interfaceSearch';
import { Track, Tracks } from '../interfaces/interfacePlaylist';

interface Props {
   children: JSX.Element | JSX.Element[];
}

export const AppProvider = ({ children }: Props) => {
   const [isLogin, setIsLogin] = useState(true);
   const [token] = useGetToken();
   const [artistsFavorites, setArtistsFavorites] = useState<any[]>(
      JSON.parse(localStorage.getItem('artist_favorite')!) || []
   );
   const [valueSearch, setValueSearch] = useState<SearchResult[]>([]);
   const [loading, setLoading] = useState(false);
   const [showModalChannel, setShowModalChannel] = useState(false);
   const [showModalNotification, setShowModalNotification] = useState(false);
   const [getArrayMusic, setGetArrayMusic] = useState<Track[]>([]);
   let currentTrack = 0;

   const handlePlayMusic = async () => {
      const audio = document.querySelector('audio');
      const audioPlayPromise = document.querySelector<HTMLAudioElement>('#track')?.play();
      audio!.src = getArrayMusic[currentTrack]?.preview;

      let playPromise = audio?.play();

      if (playPromise !== undefined) {
         await playPromise
            .then((response) => {})
            .catch((error) => {
               console.log(error);
            });
      }
   };

   return (
      <AppContext.Provider
         value={{
            token,
            showModalChannel,
            setShowModalChannel,
            showModalNotification,
            setShowModalNotification,
            isLogin,
            setIsLogin,
            artistsFavorites,
            setArtistsFavorites,
            valueSearch,
            setValueSearch,
            loading,
            setLoading,
            handlePlayMusic,
            getArrayMusic,
            setGetArrayMusic,
            currentTrack,
         }}
      >
         {children}
      </AppContext.Provider>
   );
};
