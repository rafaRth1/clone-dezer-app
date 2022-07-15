import { IoSearchOutline } from 'react-icons/io5';
import { IoNotificationsSharp } from 'react-icons/io5';

const PageTopBar = () => {
   return (
      <div className='page-topbar'>
         <div className='topbar-search'>
            <form>
               <button>
                  <IoSearchOutline color='white' size={25} />
               </button>
               <input type='text' placeholder='Buscar' />
            </form>
         </div>
         <div className='topbar-notification'>
            <button>
               <IoNotificationsSharp color='white' size={25} />
            </button>
         </div>
         <div className='topbar-account'>
            <img src='https://e-cdns-images.dzcdn.net/images/user//32x32-000000-80-0-0.jpg' alt='image-default' />
         </div>
      </div>
   );
};

export default PageTopBar;
