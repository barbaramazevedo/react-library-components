import type { Movie } from './interface/movie.interface';
import movie1 from '../../assets/images/movies/francesha.jpg';
import movie2 from '../../assets/images/movies/perfectdays.jpg';
import movie3 from '../../assets/images/movies/beforesunset.jpg';
import movie4 from '../../assets/images/movies/theworstpersonintheworld.jpg';
import movie5 from '../../assets/images/movies/imstillhere.jpg';
import movie6 from '../../assets/images/movies/theroyaltenenbaums.jpg';

export const movies: Movie[]  = [
  { id: 1, title: "Frances Ha", image: movie1 },
  { id: 2, title: "Perfect days", image: movie2 },
  { id: 3, title: "Before Sunset", image: movie3 },
  { id: 4, title: "The Worst Person in the World", image: movie4 },
  { id: 5, title: "I'm Still Here", image: movie5 },
  { id: 6, title: "The Royal Tenenbaums", image: movie6 },
];