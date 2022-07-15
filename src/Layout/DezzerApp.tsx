import PageMain from './PageMain/PageMain';
import PageTopBar from './PageTopBar';
import Sidebar from './Sidebar';

const DezzerApp = () => {
   return (
      <div className='dezer-app'>
         <PageTopBar />
         <Sidebar />
         <PageMain />
      </div>
   );
};

export default DezzerApp;
