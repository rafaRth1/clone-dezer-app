import React, { useContext } from 'react';
import { IoHeartSharp, IoPlaySharp } from 'react-icons/io5';
import Slider from '../../../components/Slider/Slider';
import { AppContext } from '../../../context/AppContext';
import { ArtistPicture } from '../../../interfaces/interfacePictureArtist';

const SectionSliderArtistProfile = () => {
   const { artistsFavorites } = useContext(AppContext);

   return (
      <section className='channel-profile'>
         <div className='container'>
            <h2>Artistas</h2>
         </div>
         <div className='container'>
            <div className='slider-artist-favorite-profile'>
               <Slider>
                  {artistsFavorites.map((artist: ArtistPicture) => (
                     <div key={artist.id} className='card-slider card-artist-profile'>
                        <figure>
                           <>
                              <img src={artist.images[0].url} alt='Image Artist' />
                           </>
                           <div className='actions'>
                              <div className='play'>
                                 <IoPlaySharp color='#000' size={22} onClick={() => console.log('Play')} />
                              </div>
                              <div className='like-artist'>
                                 <IoHeartSharp color='#EF5466' size={22} />
                              </div>
                           </div>
                        </figure>
                        <p className='artist-name'>{artist.name}</p>
                        <p className='followers'>{`${artist.followers.total.toLocaleString('en-US')} Seguidores`}</p>
                     </div>
                  ))}
               </Slider>
            </div>
         </div>
      </section>
   );
};

export default SectionSliderArtistProfile;
