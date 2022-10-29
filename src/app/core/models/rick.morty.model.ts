export interface RickyMortyModel {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string
  gender: string;
  origin: Image;
  location: Image;
  image: string;
  episode: string[];
  url: string;
  created: Date
}

export interface Image {
  name: string;
  url: string;
}
