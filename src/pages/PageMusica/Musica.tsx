import SectionAddArtist from './components/SectionAddArtist';
import SectionArtistsFavorite from './components/SectionArtistsFavorite';
import SectionPlaylistTop from './components/SectionPlaylistTop';

const Musica = () => {
   return (
      <main className='page-main-music'>
         <SectionAddArtist />
         <SectionArtistsFavorite />
         <SectionPlaylistTop />
      </main>
   );
};

export default Musica;
