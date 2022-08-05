import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const ModalNotification = () => {
   const { showModalNotification, setShowModalNotification } = useContext(AppContext);

   return (
      <div className={`modal-notifaction ${showModalNotification && 'active_modal-notification'}`}>
         <p>Se elimino de tus favoritos</p>
      </div>
   );
};

export default ModalNotification;
