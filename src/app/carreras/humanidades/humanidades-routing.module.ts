import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HumanidadesPage } from './humanidades.page';

const routes: Routes = [
  {
    path: '',
    component: HumanidadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HumanidadesPageRoutingModule {}
