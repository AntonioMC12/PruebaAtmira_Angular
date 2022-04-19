import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'nasa',
    loadChildren: () => import('./nasa/nasa.module').then(m => m.NasaModule)
  },
  {
    path: '**',
    redirectTo: 'nasa'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
