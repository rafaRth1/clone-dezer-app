import { PlaylistTracks, Track } from '../../../interfaces/interfacePlaylist';
import { TrackArtist } from '../../../interfaces/interfaceTracksArtist';
import Spinner from '../../../components/Spinner';
import { IoEllipsisHorizontalOutline, IoHeartOutline, IoMusicalNotesOutline, IoTimeOutline } from 'react-icons/io5';

interface Props {
   getPlaylist: PlaylistTracks | undefined;
   loading: boolean;
}

const TracksPlaylist = ({ getPlaylist, loading }: Props) => {
   return (
      <div className='container'>
         <div className='musics-result-rows-track'>
            <div className='song'>Canción</div>
            <div className='artist'>Artista</div>
            <div className='album'>Álbum</div>
            <div className='time-song'>
               <IoTimeOutline size={20} />
            </div>
            <div className='check-song'>
               <input type='checkbox' className='check-music' />
            </div>
         </div>

         {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', marginTop: '5rem' }}>
               <Spinner />
            </div>
         ) : (
            <div className='music-result-data'>
               {getPlaylist?.tracks.data.map((track: Track) => (
                  <div key={track.id} className='music-result-data-content'>
                     <div className='song-data'>
                        <div className='song-data-image'>
                           <img src={track.album.cover_small} alt='Imagen Music' width={'40'} height={'40'} />
                        </div>
                        <p>{track.title}</p>
                        <div className='actions-song-data'>
                           <div>
                              <IoMusicalNotesOutline size={20} />
                           </div>
                           <div>
                              <IoHeartOutline size={20} />
                           </div>
                           <div>
                              <IoEllipsisHorizontalOutline size={20} />
                           </div>
                        </div>
                     </div>
                     <div className='artist-data'>
                        <p>{track.artist.name}</p>
                     </div>
                     <div className='album-data'>
                        <p>
                           {track.album.title.length > 17
                              ? track.album.title.slice(0, 20).concat('...')
                              : track.album.title}
                        </p>
                     </div>

                     <div className='time-song-data'>
                        <p>{Math.floor((track.duration / 60) % 60)}</p>:
                        <p>{track.duration % 60 < 10 ? '0' + (track.duration % 60) : track.duration % 60}</p>
                     </div>

                     <div className='check-song'>
                        <input type='checkbox' className='check-music' />
                     </div>
                  </div>
               ))}
            </div>
         )}
      </div>
   );
};

export default TracksPlaylist;
