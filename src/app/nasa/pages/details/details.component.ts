import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apod } from '../../interfaces/apod.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  public apod!: Apod | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.recoverData();
    if (!this.apod) this.goDashboard();
  }

  goDashboard(): void {
    this.router.navigate(['/nasa/dashboard']);
  }

  recoverData(): void {
    history.state && history.state.date
      ? (this.apod = history.state as Apod)
      : (this.apod = undefined);
  }
}
