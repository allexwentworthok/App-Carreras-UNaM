import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExactasPage } from './exactas.page';

const routes: Routes = [
  {
    path: '',
    component: ExactasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExactasPageRoutingModule {}
