import { useContext, useLayoutEffect, useState } from 'react';
import fetchJsonp from 'fetch-jsonp';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { PlaylistTracks } from '../../interfaces/interfacePlaylist';
import Spinner from '../../components/Spinner';
import HeaderPlaylist from './components/HeaderPlaylist';
import TracksPlaylist from './components/TracksPlaylist';

const Playlist = () => {
   const [getPlaylist, setGetPlaylist] = useState<PlaylistTracks>();
   const { setLoading, loading } = useContext(AppContext);
   const { id_playlist } = useParams();

   useLayoutEffect(() => {
      const getSearch = async () => {
         setLoading(true);
         await fetchJsonp(`https://api.deezer.com/playlist/${id_playlist}&output=jsonp`)
            .then((response) => {
               return response.json();
            })
            .then((json) => setGetPlaylist(json))
            .catch(function (error) {
               console.log(error);
            });
         setLoading(false);
      };
      getSearch();
   }, [id_playlist]);

   return (
      <main className='page-main-playlist'>
         <HeaderPlaylist getPlaylist={getPlaylist} loading={loading} />
         <TracksPlaylist getPlaylist={getPlaylist} loading={loading} />
      </main>
   );
};

export default Playlist;
