import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-forestales',
  templateUrl: './forestales.page.html',
  styleUrls: ['./forestales.page.scss'],
})
export class ForestalesPage {
  carreras: any;
  constructor(public apiService: ApiService,private modalCtrl: ModalController) { this.carreras = []; }


  ionViewWillEnter() {
    // Used ionViewWillEnter as ngOnInit is not 
    // called due to view persistence in Ionic
    this.getAllStudents();
  }


  getAllStudents() {
    // Get saved list of students
    this.apiService.getListForestales().subscribe(response => {
      console.log(response);
      this.carreras = response;
    });
  }
  async abrirModal(nombre: string, descripcion: string, pdf: string, ubicacion: string, img: string) {

    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: {
        nombre,
        descripcion,
        pdf,
        ubicacion,
        img,
      }
    });

    modal.present();
  }
}
