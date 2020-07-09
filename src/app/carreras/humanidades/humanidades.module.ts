import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HumanidadesPageRoutingModule } from './humanidades-routing.module';

import { HumanidadesPage } from './humanidades.page';
import { ModalPageModule } from '../modal/modal.module';
import { ModalPage } from '../modal/modal.page';

@NgModule({
  entryComponents: [
    ModalPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HumanidadesPageRoutingModule,
    ModalPageModule
  ],
  declarations: [HumanidadesPage]
})
export class HumanidadesPageModule {}
