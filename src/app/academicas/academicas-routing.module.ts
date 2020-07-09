import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcademicasPage } from './academicas.page';

const routes: Routes = [
  {
    path: '',
    component: AcademicasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcademicasPageRoutingModule {}
