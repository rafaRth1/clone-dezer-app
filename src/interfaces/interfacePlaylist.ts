// Generated by https://quicktype.io

export interface PlaylistTracks {
   id: number;
   title: string;
   description: string;
   duration: number;
   public: boolean;
   is_loved_track: boolean;
   collaborative: boolean;
   nb_tracks: number;
   fans: number;
   link: string;
   share: string;
   picture: string;
   picture_small: string;
   picture_medium: string;
   picture_big: string;
   picture_xl: string;
   checksum: string;
   tracklist: string;
   creation_date: string;
   md5_image: string;
   picture_type: string;
   creator: Creator;
   type: string;
   tracks: Tracks;
}

export interface Creator {
   id: number;
   name: string;
   tracklist: string;
   type: CreatorType;
   link?: string;
}

export enum CreatorType {
   Artist = 'artist',
   User = 'user',
}

export interface Tracks {
   data: Track[];
   checksum: string;
}

export interface Track {
   id: number;
   readable: boolean;
   title: string;
   title_short: string;
   title_version: TitleVersion;
   link: string;
   duration: number;
   rank: number;
   explicit_lyrics: boolean;
   explicit_content_lyrics: number;
   explicit_content_cover: number;
   preview: string;
   md5_image: string;
   time_add: number;
   artist: Creator;
   album: Album;
   type: DatumType;
}

export interface Album {
   id: number;
   title: string;
   cover: string;
   cover_small: string;
   cover_medium: string;
   cover_big: string;
   cover_xl: string;
   md5_image: string;
   tracklist: string;
   type: AlbumType;
}

export enum AlbumType {
   Album = 'album',
}

export enum TitleVersion {
   Empty = '',
   Remix = '(Remix)',
   RemixWithCamilo = '(Remix with Camilo)',
}

export enum DatumType {
   Track = 'track',
}