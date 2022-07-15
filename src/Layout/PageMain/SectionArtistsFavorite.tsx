import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { ArtistPicture } from '../../interfaces/interfacePictureArtist';

const SectionArtistsFavorite = () => {
   const { artistsFavorites } = useContext(AppContext);

   return (
      <section className='channel-section'>
         <div className='channel-artists-favorite'>
            <div className='container'>
               <h2>Tus artistas favoritos</h2>
            </div>
            <div className='container'>
               <div className='carousel-artists-favorite'>
                  <ul className='list-artist-favorite'>
                     {artistsFavorites.map((artist: ArtistPicture) => (
                        <li key={artist.id} className='list-items-artist-favorite'>
                           <figure>
                              <img src={`${artist.images[1].url}`} alt='picture-artist' />
                           </figure>
                           <p>{artist.name}</p>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </section>
   );
};

export default SectionArtistsFavorite;
