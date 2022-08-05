import React from 'react';
import { Link } from 'react-router-dom';

const ProfileHeader = () => {
   return (
      <div className='profile-header-user'>
         <div className='container'>
            <div className='profile'>
               <div className='profile-image profile-image-size'>
                  <figure>
                     <img
                        src='https://e-cdns-images.dzcdn.net/images/user/d41d8cd98f00b204e9800998ecf8427e/264x264-000000-80-0-0.jpg'
                        alt='Image Profile'
                        width={'264px'}
                        height={'264px'}
                     />
                  </figure>
               </div>
               <div className='profile-info'>
                  <h1>Rafael Alvarez</h1>
                  <ul>
                     <li> 0 seguidores</li>
                     <li>0 seguidos</li>
                  </ul>
               </div>
            </div>
            <div className='navbar-profile'>
               <div className='container'>
                  <ul className='navbar-bar'>
                     <li className='navbar-item active-item'>
                        <Link to={'#'}>Destacados</Link>
                     </li>
                     <li className='navbar-item'>
                        <Link to={'#'}>Canciones Favoritas</Link>
                     </li>
                     <li className='navbar-item'>
                        <Link to={'#'}>Playlist</Link>
                     </li>
                     <li className='navbar-item'>
                        <Link to={'#'}>Albumes</Link>
                     </li>
                     <li className='navbar-item'>
                        <Link to={'#'}>Artistas</Link>
                     </li>
                     <li className='navbar-item'>
                        <Link to={'#'}>Historial</Link>
                     </li>
                     <li className='navbar-item'>
                        <Link to={'#'}>Podcasts</Link>
                     </li>
                     <li className='navbar-item'>
                        <Link to={'#'}>Mis MP3</Link>
                     </li>
                     <li className='navbar-item'>
                        <Link to={'#'}>Mixes</Link>
                     </li>
                     <li className='navbar-item'>
                        <Link to={'#'}>Seguidores</Link>
                     </li>
                     <li className='navbar-item'>
                        <Link to={'#'}>Destacados</Link>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProfileHeader;
