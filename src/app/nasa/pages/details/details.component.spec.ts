import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Apod } from '../../interfaces/apod.interface';

import { DetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    component.apod = {
      date: '',
      explanation: '',
      hdurl: '',
      media_type: '',
      service_version: '',
      title: '',
      url: '',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    component = new DetailsComponent(TestBed.inject(Router));
    expect(component).toBeTruthy();
  });

  it('should navigate to dashboard', () => {
    const router = TestBed.inject(Router);
    component = new DetailsComponent(TestBed.inject(Router));
    spyOn(router, 'navigate');
    component.goDashboard();
    expect(router.navigate).toHaveBeenCalledWith(['/nasa/dashboard']);
  });

  it('should call goDashboard after apod is undefined', () => {
    const spy = spyOn(component, 'goDashboard');
    component.apod = undefined;
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should set undefined apod if history.state is null', () => {
    const spy = spyOn(component, 'recoverData');
    history.pushState(null, '', null);
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
    expect(component.apod).toBeUndefined();
  });

  it('should stay on the same page if history.state is apod', () => {
    let apod: Apod = {
      date: '2022-02-02',
      explanation: '',
      hdurl: '',
      media_type: '',
      service_version: '',
      title: '',
      url: '',
    };
    const spy = spyOn(component, 'goDashboard');
    component.apod = apod;
    history.pushState(apod, 'state', 'state');
    component.ngOnInit();
    expect(history.state).toEqual(apod);
    expect(component.apod).toEqual(apod);
    expect(spy).not.toHaveBeenCalled();
  });
});
