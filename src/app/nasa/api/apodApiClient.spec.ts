import { getTestBed, TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';

import { ApodApiClient } from './apodApiClient';
import { Apod } from '../interfaces/apod.interface';
import { environment } from 'src/environments/environment';

describe('apodApiClient', () => {
  let injector: TestBed;
  let service: ApodApiClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApodApiClient],
    });
    injector = getTestBed();
    service = TestBed.inject(ApodApiClient);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('date should be 5 days before today', () => {
    expect(service.startDate).toEqual(
      new Date(new Date().setDate(new Date().getDate() - 5))
        .toISOString()
        .split('T')[0]
    );
  });

  it('should get an array of 6 apods', () => {
    const apods: Apod[] = [];

    service.get<Apod[]>(environment.apiUrl).subscribe((data) => {
      expect(data.length).toBe(0);
    });

    const req = httpMock.expectOne(
      (request) =>
        request.method === 'GET' &&
        request.url === 'https://api.nasa.gov/planetary/apod'
    );
    expect(req.request.params.get('api_key')).toEqual(environment.apiKey);
    expect(req.request.params.get('start_date')).toEqual(service.startDate);
    req.flush(apods);
  });
});
