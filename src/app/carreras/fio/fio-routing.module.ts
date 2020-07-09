import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FioPage } from './fio.page';

const routes: Routes = [
  {
    path: '',
    component: FioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FioPageRoutingModule {}
