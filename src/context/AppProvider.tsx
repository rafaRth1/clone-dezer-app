import { useState } from 'react';
import { AppContext } from './AppContext';
import useGetToken from '../hooks/useGetToken';

interface Props {
   children: JSX.Element | JSX.Element[];
}

export const AppProvider = ({ children }: Props) => {
   /*  const [appState, dispatch] = useReducer(appReducer, appInitialState); */
   const [artistsFavorites, setArtistsFavorites] = useState<any[]>(
      JSON.parse(localStorage.getItem('artist_favorite')!) || []
   );
   const [showModalChannel, setShowModalChannel] = useState(false);
   const [isLogin, setIsLogin] = useState(true);
   const [token] = useGetToken();

   /* console.log(appState.artistFavorite); */

   /*  const addArtistFavorite = (artists: ArtistPicture[]) => {
      dispatch({ type: 'ADD_TO_ARTIST', payload: artists });
   }; */

   return (
      <AppContext.Provider
         value={{
            token,
            showModalChannel,
            setShowModalChannel,
            isLogin,
            setIsLogin,
            /* addArtistFavorite, */
            artistsFavorites,
            setArtistsFavorites,
         }}
      >
         {children}
      </AppContext.Provider>
   );
};
