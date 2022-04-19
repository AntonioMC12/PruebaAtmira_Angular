import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { NasaRoutingModule } from './nasa-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DetailsComponent } from './pages/details/details.component';
import { ApodCardComponent } from './components/apod-card/apod-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { ExplanationPipe } from './pipes/explanation.pipe';
import { DetailsCardComponent } from './components/details-card/details-card.component';

@NgModule({
  declarations: [DashboardComponent, DetailsComponent, ApodCardComponent, ExplanationPipe, DetailsCardComponent],
  imports: [
    CommonModule,
    NasaRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule,
  ],
})
export class NasaModule {}
