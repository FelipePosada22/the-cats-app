import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap } from 'rxjs';
import { Cats, CatsImage } from '../models/cats.interface';
@Injectable({
  providedIn: 'root'
})
export class CatsService {
  currentCatDetails!: Cats;
  constructor(private http: HttpClient) {}

  getCats(): Observable<Cats[]> {
    const headers = new Headers();
    headers.append('Authorization', 'bda53789-d59e-46cd-9bc4-2936630fde39');
    return this.http.get<Cats[]>('https://api.thecatapi.com/v1/breeds')
  }

  updateCurrentCat(cat: Cats) {
    this.currentCatDetails = cat;
  }

  }
