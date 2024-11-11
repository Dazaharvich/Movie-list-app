import React from 'react';
import { Check, Trash2, Youtube } from 'lucide-react';
import { Movie } from '../types/movie';

interface MovieCardProps {
  movie: Movie;
  onToggleWatched: (id: number) => void;
  onRemove: (id: number) => void;
}

export const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  onToggleWatched,
  onRemove,
}) => {
  return (
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={movie.posterUrl}
        alt={movie.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
        <div className="space-y-1 text-sm text-gray-600">
          <p>Year: {movie.year}</p>
          <p>Genre: {movie.genre}</p>
          <p>Platform: {movie.platform}</p>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={() => onToggleWatched(movie.id)}
            className={`flex items-center gap-2 px-3 py-1 rounded-full ${
              movie.watched
                ? 'bg-green-100 text-green-700'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            <Check size={16} />
            {movie.watched ? 'Watched' : 'Mark as watched'}
          </button>
          {movie.trailerUrl && (
            <a
              href={movie.trailerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-700"
            >
              <Youtube size={20} />
            </a>
          )}
          <button
            onClick={() => onRemove(movie.id)}
            className="text-red-500 hover:text-red-700"
          >
            <Trash2 size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};