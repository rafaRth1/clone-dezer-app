import CreatePlaylist from './components/CreatePlaylist';
import ProfileHeader from './components/ProfileHeader';
import SectionSliderArtistProfile from './components/SectionSliderArtistProfile';

const Profile = () => {
   return (
      <main className='page-main-profile'>
         <ProfileHeader />
         <CreatePlaylist />
         <SectionSliderArtistProfile />
      </main>
   );
};

export default Profile;
