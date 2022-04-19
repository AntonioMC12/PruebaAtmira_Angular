import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apod } from '../../interfaces/apod.interface';

@Component({
  selector: 'app-apod-card',
  templateUrl: './apod-card.component.html',
  styleUrls: ['./apod-card.component.scss'],
})
export class ApodCardComponent {
  @Input() apod!: Apod;
  constructor() {}
}
