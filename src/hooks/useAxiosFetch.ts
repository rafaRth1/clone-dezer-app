import axios from 'axios';
import { useCallback, useContext, useEffect, useState } from 'react';
import { baseURL } from '../config';
import { AppContext } from '../context/AppContext';
import useGetToken from './useGetToken';

export const useAxiosFetch = (url: string) => {
   const [data, setData] = useState<any>(null);
   const [loading, setLoading] = useState<boolean>(false);
   const { token } = useContext(AppContext);
   /* const [token] = useGetToken(); */

   const fetchData = async (): Promise<void> => {
      try {
         setLoading(true);
         const response = await axios.get<any>(`${baseURL}${url}`, {
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` },
         });
         setData(response.data);
         setLoading(false);
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      fetchData();
   }, []);

   return [data, loading];
};
