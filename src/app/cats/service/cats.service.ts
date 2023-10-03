import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap } from 'rxjs';
import { Cats, CatsImage } from '../models/cats.interface';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CatsService {
  /**
   * Represents the current details of a cat.
   */
  currentCatDetails!: Cats;

  /**
   * Constructor of the CatsService.
   * @param http - The Angular HttpClient for making HTTP requests.
   */
  constructor(private http: HttpClient) {}

  /**
   * Retrieves a list of cat breeds from an external API.
   * @returns An Observable that emits an array of Cats.
   */
  getCats(): Observable<Cats[]> {
    return this.http.get<Cats[]>(`${environment.url}/v1/breeds`);
  }

  /**
   * Updates the current cat details with the provided cat.
   * @param cat - The cat object to update as the current cat details.
   */
  updateCurrentCat(cat: Cats) {
    this.currentCatDetails = cat;
  }
}
