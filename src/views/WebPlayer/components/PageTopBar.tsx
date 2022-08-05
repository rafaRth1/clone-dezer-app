import { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { IoNotificationsSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const PageTopBar = (): JSX.Element => {
   const [valueSearch, setValueSearch] = useState<string>('');
   const navigate = useNavigate();

   const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();

      if (valueSearch.length > 0) {
         navigate(`/search/${valueSearch}`);
      } else {
         console.log('Please write any');
      }
   };

   return (
      <div className='page-topbar'>
         <div className='topbar-search'>
            <form>
               <button onClick={(e) => handleSubmit(e)}>
                  <IoSearchOutline color='white' size={25} />
               </button>
               <input
                  type='text'
                  placeholder='Buscar'
                  className='search'
                  value={valueSearch}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValueSearch(e.target.value)}
               />
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
