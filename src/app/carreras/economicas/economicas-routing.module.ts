import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EconomicasPage } from './economicas.page';

const routes: Routes = [
  {
    path: '',
    component: EconomicasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EconomicasPageRoutingModule {}
