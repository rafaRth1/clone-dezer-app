import CardFamily from './components/CardFamily';
import CardFree from './components/CardFree';
import CardPartNer from './components/CardPartNer';

const MainPage = () => {
   return (
      <div className='main-page container-main-page'>
         <h1>Millones de canciones, podcasts y más. Solo dale play.</h1>

         <section className='section-cards'>
            <CardFree />
            <CardFamily />
            <CardPartNer />
         </section>
      </div>
   );
};

export default MainPage;
