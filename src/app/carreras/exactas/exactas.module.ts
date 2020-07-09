import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExactasPageRoutingModule } from './exactas-routing.module';

import { ExactasPage } from './exactas.page';
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
    ExactasPageRoutingModule,
    ModalPageModule
  ],
  declarations: [ExactasPage]
})
export class ExactasPageModule {}
