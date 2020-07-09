import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForestalesPage } from './forestales.page';

const routes: Routes = [
  {
    path: '',
    component: ForestalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForestalesPageRoutingModule {}
