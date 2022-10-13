import { useEffect, useState } from 'react';
import fetchJsonp from 'fetch-jsonp';
import { Genre } from '../../../interfaces/interfaceGenre';
import { SliderComponent } from '../../../components/Carousel';

const SectionGenres = () => {
	const [getGenres, setGetGenres] = useState([]);
	useEffect(() => {
		fetchJsonp('https://api.deezer.com/editorial&output=jsonp')
			.then(function (response) {
				return response.json();
			})
			.then((json) => setGetGenres(json?.data))
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	return (
		<section className='channel-section'>
			<div className='channel-genres'>
				<div className='container'>
					<div className='grid-genres'>
						{getGenres.map((genre: Genre) => (
							<div
								key={genre.id}
								className='card-grid-genre'>
								<figure>
									<img
										src={genre.picture_xl}
										alt='Card Genre'
									/>
								</figure>
								<div className='title-genre'>
									<p className='title-genre-text'>{genre.name}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default SectionGenres;
