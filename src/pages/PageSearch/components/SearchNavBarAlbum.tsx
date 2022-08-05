import { useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchJsonp from 'fetch-jsonp';
import Spinner from '../../../components/Spinner';
import { IoEllipsisHorizontalOutline, IoHeartOutline, IoPlaySharp } from 'react-icons/io5';
import { AlbumArtist, AlbumsArtist } from '../../../interfaces/interfaceAlbumsArtist';

const SearchNavBarAlbum = () => {
   const [getResultAlbum, setGetResultAlbum] = useState<AlbumsArtist>({ data: [], total: 0, next: '' });
   const [loading, setLoading] = useState(false);
   const { search } = useParams();

   useLayoutEffect(() => {
      const getSearch = async () => {
         setLoading(true);
         await fetchJsonp(`https://api.deezer.com/search/album?q=${search}&output=jsonp`)
            .then(function (response) {
               return response.json();
            })
            .then((json) => setGetResultAlbum(json))
            .catch(function (error) {
               console.log(error);
            });
         setLoading(false);
      };
      getSearch();
   }, [search]);

   return (
      <div className='container'>
         <h2>{getResultAlbum.total} álbumes</h2>
         {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', marginTop: '5rem' }}>
               <Spinner />
            </div>
         ) : (
            <ul className='content-search-result-playlist'>
               {getResultAlbum.data.map((playlist: AlbumArtist) => (
                  <li key={playlist.id} className='result-playlist-item'>
                     <div className='result-playlist-image'>
                        <figure>
                           <img src={playlist.cover_medium} alt='Image Playlist Artist' />
                           <ul className='action'>
                              <li className='action-item'>
                                 <div className='action-item-play'>
                                    <button>
                                       <IoPlaySharp color='#000' size={20} onClick={() => console.log('Play')} />
                                    </button>
                                 </div>
                              </li>
                              <li className='action-item '>
                                 <div className='action-item-play'>
                                    <button className='action-item-tempo-btn'>
                                       <IoHeartOutline color='#000' size={20} onClick={() => console.log('Play')} />
                                    </button>
                                 </div>
                              </li>
                              <li className='action-item'>
                                 <div className='action-item-play'>
                                    <button className='action-item-tempo-btn'>
                                       <IoEllipsisHorizontalOutline
                                          color='#000'
                                          size={20}
                                          onClick={() => console.log('Play')}
                                       />
                                    </button>
                                 </div>
                              </li>
                           </ul>
                        </figure>
                        <p className='album-name'>{playlist.title}</p>
                        <p className='album-artist-name'>{playlist.artist.name}</p>
                     </div>
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
};

export default SearchNavBarAlbum;
