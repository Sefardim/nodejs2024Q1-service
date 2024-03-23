export interface IAlbum {
  id: string; // uuid v4
  name: string;
  year: number;
  artistId: string | null; // refers to Artist
}

export type ICreateAlbum = Omit<IAlbum, 'id'>;
