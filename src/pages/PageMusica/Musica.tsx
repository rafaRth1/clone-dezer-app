import { SectionAddArtist, SectionArtistsFavorite, SectionPlaylistTop } from './components';

export const Musica = () => {
	return (
		<main className='page-main-music'>
			<SectionAddArtist />
			<SectionArtistsFavorite />
			<SectionPlaylistTop />
		</main>
	);
};
