import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EconomicasPageRoutingModule } from './economicas-routing.module';

import { EconomicasPage } from './economicas.page';

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
    EconomicasPageRoutingModule,
    ModalPageModule
  ],
  declarations: [EconomicasPage]
})
export class EconomicasPageModule {}
