export interface IArtist {
  id: string; // uuid v4
  name: string;
  grammy: boolean;
}

export type ICreateArtist = Omit<IArtist, 'id'>;
