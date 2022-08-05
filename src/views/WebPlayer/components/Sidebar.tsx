import { Link } from 'react-router-dom';
import { GiMicrophone } from 'react-icons/gi';
import { IoAppsSharp } from 'react-icons/io5';
import { IoHeartOutline } from 'react-icons/io5';
import { IoMusicalNotesSharp } from 'react-icons/io5';

const Sidebar = () => {
   return (
      <div className='page-sidebar'>
         <div className='sidebar-header'>
            <div className='sidebar-header-logo'>
               <Link to={'/'}>
                  <img
                     src='https://e-cdn-files.dzcdn.net/cache/slash/images/common/logos/deezer.1a1741c7871c27ef0ecb572defe8593e.png'
                     alt='sidebar-logo'
                  />
               </Link>
            </div>
            1
            <div className='conversion-banner'>
               <p>
                  Estás en Deezer Free. Actualízate y evita <br />
                  anuncios gratuitamente por 1 mes.
               </p>
               <Link to={'/'} className='button-suscriber'>
                  Suscribirse
               </Link>
            </div>
         </div>
         <div className='sidbebar-nav'>
            <div className='sidebar-nav-content'>
               <ul className='sidebar-nav-list'>
                  <li className='sidebar-nav-item active'>
                     <Link to={'/'} className='is-main'>
                        <IoMusicalNotesSharp color='white' size={25} />
                        <span>Música</span>
                     </Link>
                  </li>
                  <li className='sidebar-nav-item'>
                     <Link to={'/podcasts'} className='is-main'>
                        <GiMicrophone color='white' size={25} />
                        <span>Podcast</span>
                     </Link>
                  </li>
                  <li className='sidebar-nav-item'>
                     <Link to={'/explorar'} className='is-main'>
                        <IoAppsSharp color='white' size={25} />
                        <span>Explorar</span>
                     </Link>
                  </li>
                  <li className='sidebar-nav-item'>
                     <Link to={'/profile'} className='is-main'>
                        <IoHeartOutline color='white' size={25} />
                        <span>Favoritos</span>
                     </Link>
                  </li>
                  <li className='sidebar-nav-item'>
                     <Link to={'/'}>
                        <span>Canciones Favoritas</span>
                     </Link>
                  </li>
                  <li className='sidebar-nav-item'>
                     <Link to={'/'}>
                        <span>Playlist</span>
                     </Link>
                  </li>
                  <li className='sidebar-nav-item'>
                     <Link to={'/'}>
                        <span>Álbumes</span>
                     </Link>
                  </li>
                  <li className='sidebar-nav-item'>
                     <Link to={'/'}>
                        <span>Artistas</span>
                     </Link>
                  </li>
                  <li className='sidebar-nav-item'>
                     <Link to={'/'}>
                        <span>Podcast</span>
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Sidebar;
