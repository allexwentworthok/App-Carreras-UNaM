import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcademicasPageRoutingModule } from './academicas-routing.module';

import { AcademicasPage } from './academicas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcademicasPageRoutingModule
  ],
  declarations: [AcademicasPage]
})
export class AcademicasPageModule {}
