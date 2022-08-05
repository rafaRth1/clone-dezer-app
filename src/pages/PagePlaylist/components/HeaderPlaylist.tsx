import React from 'react';
import Spinner from '../../../components/Spinner';
import { PlaylistTracks } from '../../../interfaces/interfacePlaylist';

interface Props {
   getPlaylist: PlaylistTracks | undefined;
   loading: boolean;
}

const HeaderPlaylist = ({ getPlaylist, loading }: Props) => {
   console.log(getPlaylist);
   return (
      <div className='container header-playlist'>
         {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
               <Spinner />
            </div>
         ) : (
            <div className='header-playlist-info'>
               <div className='playlist-info-image'>
                  <figure>
                     <img src={getPlaylist?.picture_xl} alt='Image Search Result' />
                  </figure>
               </div>
               <div className='playlist-info-data'>
                  <h1 className='playlist-info-title'>{getPlaylist?.title}</h1>
                  <div className='playlist-info-creator'>{getPlaylist?.creator.name}</div>
                  <span className='playlist-info-description'>
                     {getPlaylist?.description} <br />
                     <span className='playlist-info-time'>3 horas</span>
                     <span className='playlist-info-followers'>{getPlaylist?.fans.toLocaleString('en-US')} fans</span>
                  </span>
               </div>
            </div>
         )}
      </div>
   );
};

export default HeaderPlaylist;
