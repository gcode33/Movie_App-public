import { MovieAppDataService } from '../movie-app-data.service';
import { Component, OnInit } from '@angular/core';

export class Movie { 
  _id!: string; 
  title!: string; 
  director!: string; 
  releaseDate!: string; 
  rating!: number; 
  genres!: string[]; 
  description!: string; 
}
@Component({
  selector: 'app-home-list',
  standalone: false,
  templateUrl: './home-list.component.html',
  styleUrl: './home-list.component.scss',
  providers: [MovieAppDataService]
})
export class HomeListComponent implements OnInit {
  movies: Movie[] = []; // Initialize the movies array

  constructor(private movieAppDataService: MovieAppDataService) {}

  // Method to fetch movies
  getMovies(): void {
    this.movieAppDataService.getMovies().then(foundMovies => {
      this.movies = foundMovies; // Assign data to movies
    });
  }

  ngOnInit(): void {
    this.getMovies(); // Fetch movies when the component initializes
  }
}


 /* movies: Movie[] = [
    {
      _id: '5a0ecd39c9ef585ea93cbc2b',
      title: 'The Shawshank Redemption',
      director: 'Directed by Frank Darabont',
      rating: 5,
      genres: ['Drama', 'Prison'],
      releaseDate: '1994',
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.'
    },
    {
      _id: '5a0ecd39c9ef585ea93cbc2c',
      title: 'Inception',
      director: 'Directed by Christopher Nolan',
      rating: 4,
      genres: ['Sci-Fi', 'Thriller'],
      releaseDate: '2010',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.'
    },
    {
      _id: '5a0ecd39c9ef585ea93cbc2d',
      title: 'The Godfather',
      director: 'Directed by Francis Ford Coppola',
      rating: 4,
      genres: ['Crime', 'Drama'],
      releaseDate: '1972',
      description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.'
    }
  ];*/
  

