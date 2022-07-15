import { ArtistPicture } from '../interfaces/interfacePictureArtist';
import { TYPES } from './appAction';

export interface InitialStateProps {
   artistFavorite: ArtistPicture[];
}

type appAction = { type: 'ADD_TO_ARTIST'; payload: ArtistPicture[] };

export const appInitialState: InitialStateProps = {
   artistFavorite: [],
};

export const appReducer = (state: InitialStateProps, action: appAction): InitialStateProps => {
   switch (action.type) {
      case TYPES.ADD_TO_ARTIST:
         return {
            ...state,
            artistFavorite: action.payload,
         };

      default:
         return state;
   }
};
