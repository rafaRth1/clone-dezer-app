import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../context/AppContext';
import { useAxiosFetchSpotify } from '../../../hooks/useAxiosFetchSpotify';
import { baseURLSpotify } from '../../../config';
import { ArtistPicture } from '../../../interfaces/interfacePictureArtist';
import ModalChannelSection from '../../../components/ModalChannelSection';
import Spinner from '../../../components/Spinner';

const SectionAddArtist = () => {
   const [idsArtists, setIdsArtists] = useState<any>([]);
   const [showModalChannel, setShowModalChannel] = useState(false);
   const { token, artistsFavorites } = useContext(AppContext);

   const [fetchPictureDefault, loading] = useAxiosFetchSpotify(
      '/artists?ids=2CIMQHirSU0MQqyYHq0eOx,1vCWHaC5f2uS3yhpwWbIA6,1mcTU81TzQhprhouKaTkpq,0du5cEVh5yTK9QJze8zA0C,57dN52uHvrHOxijzpIgu3E'
   );

   const handleAddArtist = async () => {
      const result = await axios.get(`${baseURLSpotify}/search?q=a&type=artist&market=ES&limit=50`, {
         method: 'GET',
         headers: { Authorization: `Bearer ${token}` },
      });
      const data = result.data;
      setIdsArtists(data.artists.items);
      setShowModalChannel(true);
   };

   useEffect(() => {
      localStorage.setItem('artist_favorite', JSON.stringify(artistsFavorites));
   }, [artistsFavorites]);

   return (
      <section className='channel-section'>
         <div className='container-page-content'>
            <div className='channel-artist-select'>
               <p>Desbloquea Flow seleccionando tus artistas favoritos para tener mejores recomendaciones.</p>
               <div className='channel-pictures'>
                  {loading ? (
                     <div style={styles.styleContentSpinner}>
                        <Spinner />
                     </div>
                  ) : (
                     fetchPictureDefault?.artists.map((picture: ArtistPicture) => (
                        <div
                           key={picture.id}
                           className='channel-pictures-item'
                           onClick={() => {
                              setShowModalChannel(!showModalChannel), handleAddArtist();
                           }}
                        >
                           <figure>
                              <img src={`${picture.images[2].url}`} alt='image-default-artist' />
                           </figure>
                        </div>
                     ))
                  )}
               </div>
               <ModalChannelSection
                  idsArtists={idsArtists}
                  showModalChannel={showModalChannel}
                  setShowModalChannel={setShowModalChannel}
               />
               <button className='button-channel-section' onClick={() => handleAddArtist()}>
                  Agregar Artistas
               </button>
            </div>
         </div>
      </section>
   );
};

const styles = {
   styleContentSpinner: {
      height: '152px',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
   },
};

export default SectionAddArtist;
