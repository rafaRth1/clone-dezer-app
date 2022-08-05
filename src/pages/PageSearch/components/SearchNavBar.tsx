import { Link } from 'react-router-dom';

interface Props {
   search: string | undefined;
}

const SearchNavBar = ({ search }: Props) => {
   const navbarItems = document.querySelectorAll('.navbar-search-item');

   navbarItems.forEach((navbarItem, index) => {
      const item = navbarItem;
      const url = window.location.href;

        if (url.includes('')) {
         if (index === 0) {
            document.querySelector('.navbar-nav-search .active-searct-item')?.classList.remove('active-searct-item');
            item.classList.add('active-searct-item');
         }
      }

      if (url.includes('playlist')) {
         if (index === 1) {
            document.querySelector('.navbar-nav-search .active-searct-item')?.classList.remove('active-searct-item');
            item.classList.add('active-searct-item');
         }
      }

      if (url.includes('track')) {
         if (index === 2) {
            document.querySelector('.navbar-nav-search .active-searct-item')?.classList.remove('active-searct-item');
            item.classList.add('active-searct-item');
         }
      }

      if (url.includes('album')) {
         if (index === 3) {
            document.querySelector('.navbar-nav-search .active-searct-item')?.classList.remove('active-searct-item');
            item.classList.add('active-searct-item');
         }
      }

      if (url.includes('artist')) {
         if (index === 4) {
            document.querySelector('.navbar-nav-search .active-searct-item')?.classList.remove('active-searct-item');
            item.classList.add('active-searct-item');
         }
      }

      if (url.includes('show')) {
         if (index === 5) {
            document.querySelector('.navbar-nav-search .active-searct-item')?.classList.remove('active-searct-item');
            item.classList.add('active-searct-item');
         }
      }

      item.addEventListener('click', () => {
         document.querySelector('.navbar-nav-search .active-searct-item')?.classList.remove('active-searct-item');
         item.classList.add('active-searct-item');
      });
   });

   /* active-searct-item */

   return (
      <div className='search-navbar'>
         <nav className='content-navbar'>
            <div className='container'>
               <ul className='navbar-nav-search'>
                  <li className='navbar-search-item active-searct-item'>
                     <Link to={`/search/${search}`}>Todo</Link>
                  </li>
                  <li className='navbar-search-item'>
                     <Link to={`/search/${search}/playlist`}>Playlist</Link>
                  </li>
                  <li className='navbar-search-item'>
                     <Link to={`/search/${search}/track`}>Canciones</Link>
                  </li>
                  <li className='navbar-search-item'>
                     <Link to={`/search/${search}/album`}>Albumes</Link>
                  </li>
                  <li className='navbar-search-item'>
                     <Link to={`/search/${search}/artist`}>Artistas</Link>
                  </li>
                  <li className='navbar-search-item'>
                     <Link to={`/search/${search}/show`}>Podcasts</Link>
                  </li>
               </ul>
            </div>
         </nav>
      </div>
   );
};

export default SearchNavBar;
