import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtesPage } from './artes.page';

const routes: Routes = [
  {
    path: '',
    component: ArtesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtesPageRoutingModule {}
