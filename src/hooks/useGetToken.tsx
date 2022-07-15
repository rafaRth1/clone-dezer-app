import { useEffect, useState } from 'react';

const useGetToken = () => {
   const [token, setToken] = useState<any>('');

   const getToken = async () => {
      const client_id = 'bf6b87824f1f4c04944b9076ed40023f';
      const clientSecret = '2a46747991bd4551a380996a78a129da';
      const result = await fetch('https://accounts.spotify.com/api/token', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'Basic ' + btoa(client_id + ':' + clientSecret),
         },
         body: 'grant_type=client_credentials',
      });

      const data = await result.json();
      setToken(data.access_token);
   };

   useEffect(() => {
      getToken();
   }, []);

   return [token];
};

export default useGetToken;
