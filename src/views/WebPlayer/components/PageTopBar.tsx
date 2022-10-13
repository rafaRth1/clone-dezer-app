import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoSearchOutline, IoNotificationsSharp } from 'react-icons/io5';

export const PageTopBar = (): JSX.Element => {
	const [valueSearch, setValueSearch] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();

		if (valueSearch.length > 0) navigate(`/search/${valueSearch}`);
	};

	return (
		<div className='page-topbar'>
			<div className='topbar-search'>
				<form>
					<button onClick={(e) => handleSubmit(e)}>
						<IoSearchOutline
							color='white'
							size={20}
						/>
					</button>
					<input
						type='text'
						placeholder='Buscar'
						className='search'
						value={valueSearch}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValueSearch(e.target.value)}
					/>
				</form>
			</div>
			<div className='topbar-notification'>
				<button>
					<IoNotificationsSharp
						color='white'
						size={20}
					/>
				</button>
			</div>
			<div className='topbar-account'>
				<img
					src='https://e-cdns-images.dzcdn.net/images/user/22x22-000000-80-0-0.jpg'
					alt='image-default'
				/>
			</div>
		</div>
	);
};
