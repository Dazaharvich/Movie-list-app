import React, { useState } from 'react';
import { Film } from 'lucide-react';
import { MovieCard } from './components/MovieCard';
import { AddMovieForm } from './components/AddMovieForm';
import { useMovieStore } from './store/useMovieStore';

function App() {
  const { movies, addMovie, toggleWatched, removeMovie } = useMovieStore();
  const [filter, setFilter] = useState('all');

  const filteredMovies = movies.filter((movie) => {
    if (filter === 'watched') return movie.watched;
    if (filter === 'unwatched') return !movie.watched;
    return true;
  });

  const handleAddMovie = (movieData: any) => {
    const newMovie = {
      ...movieData,
      id: Date.now(),
      watched: false,
    };
    addMovie(newMovie);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Film className="text-blue-500" size={32} />
            <h1 className="text-3xl font-bold text-gray-900">Movie Watchlist</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <AddMovieForm onAdd={handleAddMovie} />

        <div className="mb-6">
          <div className="flex gap-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg ${
                filter === 'all'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-700'
              }`}
            >
              All Movies
            </button>
            <button
              onClick={() => setFilter('watched')}
              className={`px-4 py-2 rounded-lg ${
                filter === 'watched'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-700'
              }`}
            >
              Watched
            </button>
            <button
              onClick={() => setFilter('unwatched')}
              className={`px-4 py-2 rounded-lg ${
                filter === 'unwatched'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-700'
              }`}
            >
              To Watch
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onToggleWatched={toggleWatched}
              onRemove={removeMovie}
            />
          ))}
        </div>

        {filteredMovies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No movies found. Add some movies to your watchlist!
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;