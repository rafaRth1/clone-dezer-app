import { Link } from 'react-router-dom';

const CardFamily = () => {
   return (
      <div className='card-family'>
         <div className='card-family_content'>
            <h2>Deezer Family</h2>
            <p>Música para todos.</p>
            <p>
               Obtén 6 cuentas individuales, todas con los beneficios de Deezer Premium, incluyendo sonido de alta
               fidelidad.
            </p>
            <p>Escucha simultáneamente en varios dispositivos.</p>
            <Link to={'/'} className='button'>
               Pruebalo Gratis
            </Link>
            <Link to={'/'} className='time-suscription'>
               1 mes gratis
            </Link>
            <Link to={'/'} className='price'>
               luego S/ 26.90/mes.
            </Link>
            <p>Sin compromiso, puedes cancelar cuando quieras.</p>
            <a href='#' className='more-information'>
               Mas Información
            </a>
         </div>
      </div>
   );
};

export default CardFamily;
