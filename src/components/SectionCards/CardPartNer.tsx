import { Link } from 'react-router-dom';

const CardPartNer = () => {
   return (
      <div className='card-partnership'>
         <div className='card-partnership_content'>
            <h2>Oferta de Socio</h2>
            <img
               src='https://cdns-images.dzcdn.net/images/misc/dba309ace802b1eabb4615d685c72c58/48x0-none-90-1-1.png'
               alt=''
            />
            <Link to={'/'} className='button'>
               Activar la Oferta de mi socio
            </Link>
         </div>
      </div>
   );
};

export default CardPartNer;
