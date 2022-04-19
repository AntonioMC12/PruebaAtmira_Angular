import { Component, OnInit } from '@angular/core';

import { Apod } from '../../interfaces/apod.interface';
import { NasaService } from '../../services/nasa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public apods: Apod[] = [];
  constructor(private nasaService: NasaService) {}

  ngOnInit(): void {
    this.loadApodData();
  }

  loadApodData(): void {
    this.nasaService.getPreviousSixApods().subscribe(
      (apods) => (this.apods = apods),
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="/nasa/dashboard">Retry</a>',
          showConfirmButton: false,
        });
      }
    );
  }
}
