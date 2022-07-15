import { useContext, useEffect, useState } from 'react';
import { AppProvider } from './context/AppProvider';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import MainPage from './Layout/MainPage';
import Login from './views/Login';
import DezzerApp from './Layout/DezzerApp';
import { AppContext } from './context/AppContext';

function App() {
   const [isLogin, setisLogin] = useState(true);

   if (isLogin) {
      document.querySelector('body')?.classList.add('no-bg');
   } else {
      document.querySelector('body')?.classList.remove('no-bg');
   }

   const CheckIsLogin = () => {
      if (isLogin) {
         <Navigate to={'/'} />;
         return <DezzerApp />;
      } else {
         return <MainPage />;
      }
   };

   return (
      <BrowserRouter>
         <AppProvider>
            <Routes>
               <Route path='/' element={<Layout />}>
                  <Route index element={<CheckIsLogin />} />
                  <Route path='login' element={<Login />} />
               </Route>
            </Routes>
         </AppProvider>
      </BrowserRouter>
   );
}

export default App;
