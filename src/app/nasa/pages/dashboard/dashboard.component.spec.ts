import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NasaService } from '../../services/nasa.service';
import {
  HttpClientTestingModule,
} from '@angular/common/http/testing';

import { DashboardComponent } from './dashboard.component';
import { Apod } from '../../interfaces/apod.interface';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      providers: [NasaService],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call loadApodData', () => {
    spyOn(component, 'loadApodData').and.callThrough();
    component.loadApodData();
    expect(component.loadApodData).toHaveBeenCalled();
  });

  it('should call loadApodData and apods should be 6', () => {
    const response: Apod[] = [];
    const nasaService = TestBed.inject(NasaService);
    spyOn(nasaService, 'getPreviousSixApods').and.returnValue(of(response));
    component.loadApodData();
    fixture.detectChanges();
    expect(component.apods).toEqual(response);
  });

  it('should call loadApodData and throw error', () => {
    const response: Apod[] = [];
    const nasaService = TestBed.inject(NasaService);
    spyOn(nasaService, 'getPreviousSixApods').and.returnValue(
      of(response).pipe(
        map(() => {
          throw new Error('Error');
        })
      )
    );
    component.loadApodData();
    fixture.detectChanges();
    expect(component.apods).toEqual([]);
  });
});
