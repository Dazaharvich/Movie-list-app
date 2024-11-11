const TMDB_API_KEY = 'YOUR_TMDB_API_KEY'; // Replace with your API key
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

export const tmdb = {
  async searchMovies(query: string) {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}&language=es-ES`
    );
    return response.json();
  },

  async getGenres() {
    const response = await fetch(
      `${BASE_URL}/genre/movie/list?api_key=${TMDB_API_KEY}&language=es-ES`
    );
    return response.json();
  },

  async getMovieTrailer(movieId: number) {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}/videos?api_key=${TMDB_API_KEY}&language=es-ES`
    );
    const data = await response.json();
    return data.results.find((video: any) => video.type === 'Trailer');
  },

  getPosterUrl(path: string, size: 'w500' | 'original' = 'w500') {
    return `${IMAGE_BASE_URL}/${size}${path}`;
  }
};