import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApodCardComponent } from './apod-card.component';

describe('ApodCardComponent', () => {

  it('should be instance', () => {
    const component = new ApodCardComponent();
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(ApodCardComponent);
    expect(component.apod).toBeUndefined();
  });

});
