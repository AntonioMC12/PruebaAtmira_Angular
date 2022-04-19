import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apod } from '../../interfaces/apod.interface';

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.scss'],
})
export class DetailsCardComponent {
  @Input() public apod!: Apod;
  constructor(private router: Router) {}

  goDashboard(): void {
    this.router.navigate(['/nasa/dashboard']);
  }
}
