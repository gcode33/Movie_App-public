import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs'; // Import RxJS function
import { Movie } from './home-list/home-list.component';

@Injectable({
  providedIn: 'root',
})
export class MovieAppDataService {
  private apiBaseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  public getMovies(): Promise<Movie[]> {
    const url: string = `${this.apiBaseUrl}/movie`;

    // Use firstValueFrom to convert observable to promise
    return firstValueFrom(this.http.get<Movie[]>(url))
      .catch(this.handleError); // Handle errors
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }
}

