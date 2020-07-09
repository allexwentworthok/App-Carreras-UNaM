import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtesPageRoutingModule } from './artes-routing.module';

import { ArtesPage } from './artes.page';
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
    ArtesPageRoutingModule,
    ModalPageModule
  ],
  declarations: [ArtesPage]
})
export class ArtesPageModule {}
