import { Route, Routes } from 'react-router-dom';
import { AuthRotues } from '../auth/routes/AuthRoutes';
import { DeezerRoutes } from '../pages/routes/DeezerRoutes';

export const AppRouter = () => {
	return (
		<Routes>
			<Route
				path='/*'
				element={<DeezerRoutes />}
			/>

			<Route
				path='/auth/*'
				element={<AuthRotues />}
			/>
		</Routes>
	);
};
