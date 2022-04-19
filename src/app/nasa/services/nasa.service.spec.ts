import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';

import { NasaService } from './nasa.service';
import { environment } from 'src/environments/environment';
import { Apod } from '../interfaces/apod.interface';
import { of } from 'rxjs';

describe('NasaService', () => {
  let service: NasaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NasaService],
    });
    service = TestBed.inject(NasaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getPreviousSixApods and return an array of Apod', () => {
    const response: Apod[] = [];
    spyOn(service, 'getPreviousSixApods').and.returnValue(of(response));
    service.getPreviousSixApods();
    expect(service.getPreviousSixApods).toHaveBeenCalled();
  });
});
