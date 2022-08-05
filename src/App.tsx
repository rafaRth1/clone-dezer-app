import { useState } from 'react';
import { AppProvider } from './context/AppProvider';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MainPage from './views/MainPage/MainPage';
import Login from './pages/Login';
import PodCasts from './pages/PagePodcasts/Podcasts';
import Musica from './pages/PageMusica/Musica';
import WebPlayer from './views/WebPlayer/WebPlayer';
import Explorar from './pages/PageExplorar/Explorar';
import Profile from './pages/pageProfile/Profile';
import Search from './pages/PageSearch/Search';
import SearchNavBarPlaylist from './pages/PageSearch/components/SearchNavBarPlaylist/SearchNavBarPlaylist';
import SectionResultSearctAll from './pages/PageSearch/components/SectionResultSearctAll';
import SearchNavBarTrack from './pages/PageSearch/components/SearchNavBarTrack';
import SearchNavBarAlbum from './pages/PageSearch/components/SearchNavBarAlbum';
import SearchNavBarArtist from './pages/PageSearch/components/SearchNavBarArtist';
import SearchNavBarPlaylistItem from './pages/PageSearch/components/SearchNavBarPlaylist/SearchNavBarPlaylistItem';
import Playlist from './pages/PagePlaylist/Playlist';

function App() {
   const [isLogin, setisLogin] = useState(true);

   if (isLogin) {
      document.querySelector('body')?.classList.add('no-bg');
   } else {
      document.querySelector('body')?.classList.remove('no-bg');
   }

   const CheckIsLogin = () => {
      if (isLogin) {
         <Navigate to={'/'} />;
         return <WebPlayer />;
      } else {
         return <MainPage />;
      }
   };

   return (
      <BrowserRouter>
         <AppProvider>
            <Routes>
               <Route path='/' element={<CheckIsLogin />}>
                  <Route index element={<Musica />} />
                  <Route path='podcasts' element={<PodCasts />} />
                  <Route path='explorar' element={<Explorar />} />
                  <Route path='profile' element={<Profile />} />
                  <Route path='search/' element={<Search />}>
                     <Route path=':search' element={<SectionResultSearctAll />} />
                     <Route path=':search/playlist' element={<SearchNavBarPlaylist />} />
                     <Route path=':search/playlist/:item' element={<SearchNavBarPlaylistItem />} />
                     <Route path=':search/album' element={<SearchNavBarAlbum />} />
                     <Route path=':search/artist' element={<SearchNavBarArtist />} />
                     <Route path=':search/show' element={<SearchNavBarPlaylist />} />
                  </Route>
                  <Route path='playlist/:id_playlist' element={<Playlist />} />
               </Route>
               <Route path='/login' element={<Login />} />
            </Routes>
         </AppProvider>
      </BrowserRouter>
   );
}

export default App;
