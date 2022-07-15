import { useAxiosFetch } from '../../hooks/useAxiosFetch';
import ChannelSectionForYou from './ChannelSectionForYou';
import SectionAddArtist from './SectionAddArtist';
import SectionArtistsFavorite from './SectionArtistsFavorite';

const PageMain = () => {
   return (
      <main className='page-main-dezzer'>
         <SectionAddArtist />
         {/*  <ChannelSectionForYou /> */}
         <SectionArtistsFavorite />
      </main>
   );
};

export default PageMain;
