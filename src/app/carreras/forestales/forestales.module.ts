import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForestalesPageRoutingModule } from './forestales-routing.module';

import { ForestalesPage } from './forestales.page';
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
    ForestalesPageRoutingModule,
    ModalPageModule
  ],
  declarations: [ForestalesPage]
})
export class ForestalesPageModule {}
