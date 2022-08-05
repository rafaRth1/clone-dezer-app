import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import ModalNotification from '../../components/ModalNotification/ModalNotification';
import PageTopBar from './components/PageTopBar';
import Sidebar from './components/Sidebar';
import PagePlayer from './components/PagePlayer';

const WebPlayer = () => {
   const { setShowModalNotification } = useContext(AppContext);

   setTimeout(() => {
      setShowModalNotification(false);
   }, 3000);

   return (
      <div className='layout'>
         <PageTopBar />
         <Sidebar />
         <ModalNotification /> {/* <=== Componente Global */}
         <div className='page-home'>
            <Outlet />
         </div>
         <PagePlayer />
      </div>
   );
};

export default WebPlayer;
