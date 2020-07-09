import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FioPageRoutingModule } from './fio-routing.module';

import { FioPage } from './fio.page';
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
    FioPageRoutingModule,
    ModalPageModule
  ],
  declarations: [FioPage]
})
export class FioPageModule {}
