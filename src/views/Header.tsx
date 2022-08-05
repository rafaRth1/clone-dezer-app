import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Header = () => {
   const { isLogin } = useContext(AppContext);

   return !isLogin ? (
      <header>
         <div className='content-header container'>
            <Link to={'/'} className='partnet-top-banner'>
               <div className='partnet-top-banner_text'>{'Activar la oferta de mi socio >'}</div>
               <div className='partnet-top-banner_logo'>
                  <img
                     src='https://cdns-images.dzcdn.net/images/misc/dba309ace802b1eabb4615d685c72c58/48x0-none-90-1-1.png'
                     alt='logo-parnet'
                  />
               </div>
            </Link>

            <div className='logo-main'>
               <img
                  src={
                     'https://e-cdn-files.dzcdn.net/cache/slash/images/common/logos/deezer.1a1741c7871c27ef0ecb572defe8593e.png'
                  }
                  alt=''
               />
            </div>

            <div className='login'>
               <Link to={'/login'}>
                  <span>Iniciar Sesion</span>
               </Link>
            </div>
         </div>
      </header>
   ) : null;
};

export default Header;
