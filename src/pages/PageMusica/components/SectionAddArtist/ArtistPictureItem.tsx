import { ArtistPicture } from '../../../../interfaces/interfacePictureArtist';

interface Props {
	picture: ArtistPicture;
	setShowModalChannel: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ArtistPictureItem = ({ picture, setShowModalChannel }: Props) => {
	return (
		<div
			className='channel-pictures-item'
			onClick={() => setShowModalChannel(true)}>
			<figure>
				<img
					src={`${picture.images[2].url}`}
					alt='image-default-artist'
				/>
			</figure>
		</div>
	);
};
