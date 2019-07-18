import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Doggo } from '../models/doggo';

@Injectable({
  providedIn: 'root'
})
export class FetchDoggoService {
  private doggoUrl = 'https://dog.ceo/api/breeds/image/random';

  constructor(private http: HttpClient) {}

  getDoggos(): Observable<Doggo> {
    return this.http.get<Doggo>(this.doggoUrl);
  }
}
