// Generated by https://quicktype.io

export interface PlaylistsTops {
   data: PlaylistTop[];
   total: number;
}

export interface PlaylistTop {
   id: number;
   title: string;
   public: boolean;
   nb_tracks: number;
   link: string;
   picture: string;
   picture_small: string;
   picture_medium: string;
   picture_big: string;
   picture_xl: string;
   checksum: string;
   tracklist: string;
   creation_date: string;
   md5_image: string;
   picture_type: PictureTypeEnum;
   user: User;
   type: PictureTypeEnum;
}

export enum PictureTypeEnum {
   Playlist = 'playlist',
}

export interface User {
   id: number;
   name: Name;
   tracklist: string;
   type: UserType;
}

export enum Name {
   DeezerEditorAmericas = 'Deezer Editor Americas',
   DeezerLatinMusicEditor = 'Deezer Latin Music Editor',
   RodDeezerRockEditor = 'Rod - Deezer Rock Editor',
}

export enum UserType {
   User = 'user',
}
