import { useEffect, useState } from 'react';
import { useContextDeezer } from '../../../../hooks/useContextDeezer';
import { useAxiosFetchSpotify } from '../../../../hooks/useAxiosFetchSpotify';
import { ModalChannelSection, Spinner } from '../../../../components';
import { ArtistPictureItem } from './ArtistPictureItem';

export const SectionAddArtist = () => {
	const [showModalChannel, setShowModalChannel] = useState(false);
	const { artistsFavorites } = useContextDeezer();

	const [getArtistPicture, loading] = useAxiosFetchSpotify(
		'/artists?ids=2CIMQHirSU0MQqyYHq0eOx,1vCWHaC5f2uS3yhpwWbIA6,1mcTU81TzQhprhouKaTkpq,0du5cEVh5yTK9QJze8zA0C,57dN52uHvrHOxijzpIgu3E'
	);

	useEffect(() => {
		localStorage.setItem('artist_favorite', JSON.stringify(artistsFavorites));
	}, [artistsFavorites]);

	return (
		<section className='channel-section'>
			<div className='container-page-content'>
				<div className='channel-artist-select'>
					<p>Desbloquea Flow seleccionando tus artistas favoritos para tener mejores recomendaciones.</p>
					<div className='channel-pictures'>
						{loading ? (
							<Spinner />
						) : (
							getArtistPicture?.artists.map((picture: any) => (
								<ArtistPictureItem
									key={picture.id}
									picture={picture}
									setShowModalChannel={setShowModalChannel}
								/>
							))
						)}
					</div>
					<ModalChannelSection
						showModalChannel={showModalChannel}
						setShowModalChannel={setShowModalChannel}
					/>
					<button
						className='button-channel-section'
						onClick={() => setShowModalChannel(true)}>
						Agregar Artistas
					</button>
				</div>
			</div>
		</section>
	);
};
