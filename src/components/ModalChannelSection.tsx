import { useContext, useState } from 'react';
import { genresMusic } from '../utilities/genresMusic';
import { ArtistPicture } from '../interfaces/interfacePictureArtist';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { IoSearchOutline } from 'react-icons/io5';
import { AppContext } from '../context/AppContext';
import { IoHeartSharp } from 'react-icons/io5';

const ModalChannelSection = ({ idsArtists, showModalChannel, setShowModalChannel }: any) => {
   const [valueSearch, setValueSearch] = useState('');
   const [activeEffetcPicture, setActiveEffetcPicture] = useState(false);
   const { artistsFavorites, setArtistsFavorites } = useContext(AppContext);

   const handleAddArtist = (artist: ArtistPicture) => {
      /* const exists = artistsFavorites.some((artistFavorite) => artistFavorite.id === artist.id);

      if (exists) {
         const artistFavorite = artistsFavorites.map((artistFavorite) => {
            if (artistFavorite.id === artist.id) {
               return artistFavorite;
            } else {
               return artistFavorite;
            }
         });
         setArtistsFavorites([...artistFavorite]);
      } else {
         setArtistsFavorites([...artistsFavorites, artist]);
      } */

      const exists = artistsFavorites.some((artistFavorite) => artistFavorite.id === artist.id);

      if (exists) {
         const arrayArtistsFavorite = artistsFavorites.filter((artistFavorite) => artistFavorite.id !== artist.id);
         setArtistsFavorites([...arrayArtistsFavorite]);
      } else {
         setArtistsFavorites([...artistsFavorites, artist]);
      }

      const artistContainerItems: any = document.querySelectorAll('.artists-card');
      const iconHear = document.querySelectorAll('.icon-add-favorite');

      for (let i = 0; i < artistContainerItems.length; i++) {
         if (artistContainerItems[i]?.dataset.id === artist.id) {
            artistContainerItems[i].classList.toggle('bg-active-favorite-artist');
            iconHear[i].classList.toggle('active-favorite-artist');
         }
      }
   };

   return (
      <div className={`modal-channel-section ${showModalChannel ? 'activeModalChannel' : ''}`}>
         <div className={`modal-channel-content`}>
            <div className='logo-dezzer'>
               <img
                  src={
                     'https://e-cdn-files.dzcdn.net/cache/slash/images/common/logos/deezer.1a1741c7871c27ef0ecb572defe8593e.png'
                  }
                  alt='logo-dezzer'
               />

               <button>
                  <IoCloseCircleOutline color='white' size={30} onClick={() => setShowModalChannel(false)} />
               </button>
            </div>

            <div className='header-modal-channel'>
               <div className='header-modal-channel-container'>
                  <div className='header-modal-channel-stacks'>
                     <h1>Te damos la bienvenida</h1>
                     <p>¡Elige tus artistas para recomendaciones personalizadas!</p>
                     <div className='search-modal-channel'>
                        <IoSearchOutline color='white' size={20} />
                        <input
                           type='text'
                           placeholder='Buscar'
                           value={valueSearch}
                           onChange={(e) => setValueSearch(e.target.value)}
                        />
                     </div>
                  </div>
               </div>
               <div className='genres-music'>
                  <div className='genres-music-content'>
                     {genresMusic.map((genre: any) => (
                        <button className='button-genre' key={genre}>
                           {genre}
                        </button>
                     ))}
                  </div>
               </div>
            </div>
            <div className='artists-grid'>
               <div className='scroll-artists'>
                  <div className='artists-container'>
                     {idsArtists.map((artist: ArtistPicture) => (
                        <div
                           key={artist.id}
                           className={`artists-card`}
                           onClick={() => setActiveEffetcPicture(!activeEffetcPicture)}
                           data-id={artist.id}
                        >
                           <div className={`picture-artist`} onClick={() => handleAddArtist(artist)}>
                              <img src={artist.images[0]?.url} alt='Images Artist' width={242} height={242} />
                           </div>
                           <div className={`icon-add-favorite`}>
                              <IoHeartSharp color='white' size={45} />
                           </div>
                           <div className='name-artist'>{artist.name}</div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ModalChannelSection;
