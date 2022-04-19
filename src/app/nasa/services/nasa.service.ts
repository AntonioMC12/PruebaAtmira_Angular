import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApodApiClient } from '../api/apodApiClient';
import { Apod } from '../interfaces/apod.interface';

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  constructor(private apodApiClient: ApodApiClient) {}

  getPreviousSixApods(): Observable<Apod[]> {
    return this.apodApiClient.get<Apod[]>(environment.apiUrl);
  }
}
