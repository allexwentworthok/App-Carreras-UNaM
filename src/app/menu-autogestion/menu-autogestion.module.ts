import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuAutogestionPageRoutingModule } from './menu-autogestion-routing.module';

import { MenuAutogestionPage } from './menu-autogestion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuAutogestionPageRoutingModule
  ],
  declarations: [MenuAutogestionPage]
})
export class MenuAutogestionPageModule {}
