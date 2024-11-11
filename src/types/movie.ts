export interface Movie {
  id: number;
  title: string;
  genre: string;
  year: number;
  platform: string;
  posterUrl: string;
  trailerUrl?: string;
  watched: boolean;
}