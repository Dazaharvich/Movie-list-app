import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Movie } from '../types/movie';

interface MovieStore {
  movies: Movie[];
  addMovie: (movie: Movie) => void;
  toggleWatched: (id: number) => void;
  removeMovie: (id: number) => void;
}

export const useMovieStore = create<MovieStore>()(
  persist(
    (set) => ({
      movies: [],
      addMovie: (movie) =>
        set((state) => ({
          movies: [...state.movies, movie],
        })),
      toggleWatched: (id) =>
        set((state) => ({
          movies: state.movies.map((movie) =>
            movie.id === id ? { ...movie, watched: !movie.watched } : movie
          ),
        })),
      removeMovie: (id) =>
        set((state) => ({
          movies: state.movies.filter((movie) => movie.id !== id),
        })),
    }),
    {
      name: 'movie-storage',
    }
  )
);