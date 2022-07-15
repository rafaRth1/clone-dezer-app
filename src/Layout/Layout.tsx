import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
   return (
      <div className='layout'>
         <Header />

         <div className='home-page'>
            <Outlet />
         </div>
      </div>
   );
};

export default Layout;
