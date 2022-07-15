import { Link } from 'react-router-dom';

const CardFree = () => {
   return (
      <div className='card-free'>
         <div className='card-free_content'>
            <h2>Deezer Free</h2>
            <p>Música, podcasts y radio, además de recomendaciones hechas para ti.</p>
            <Link to={'/'} className='button'>
               Registrate Gratis
            </Link>
            <p>No se requiere pago</p>
            <a href='#' className='more-information'>
               Mas Información
            </a>
         </div>
      </div>
   );
};

export default CardFree;
