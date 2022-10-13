import { Outlet } from 'react-router-dom';
import { PagePlayer, PageSidebar, PageTopBar } from './components';

const WebPlayer = () => {
	// const { setShowModalNotification } = useContext(AppContext);

	// setTimeout(() => {
	// 	setShowModalNotification(false);
	// }, 3000);

	return (
		<div className='layout-app'>
			<PageTopBar />
			<PageSidebar />

			{/* <ModalNotification />  */}

			<main className='page-home'>
				<Outlet />
			</main>
			{/* <PagePlayer /> */}
		</div>
	);
};

export default WebPlayer;
