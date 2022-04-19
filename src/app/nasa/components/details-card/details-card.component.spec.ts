import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DetailsCardComponent } from './details-card.component';

describe('DetailsCardComponent', () => {
  let component: DetailsCardComponent;
  let router: Router;
  let routerTest: RouterTestingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsCardComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  it('should navigate to dashboard', () => {
    router = TestBed.inject(Router);
    routerTest = TestBed.inject(RouterTestingModule);
    component = new DetailsCardComponent(router);
    spyOn(router, 'navigate');
    component.goDashboard();
    expect(router.navigate).toHaveBeenCalledWith(['/nasa/dashboard']);
  });

  it('should create', () => {
    component = new DetailsCardComponent(TestBed.inject(Router));
    expect(component).toBeTruthy();
  });
});
