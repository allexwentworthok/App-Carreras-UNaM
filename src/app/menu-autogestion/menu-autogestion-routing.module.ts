import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuAutogestionPage } from './menu-autogestion.page';

const routes: Routes = [
  {
    path: '',
    component: MenuAutogestionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuAutogestionPageRoutingModule {}
