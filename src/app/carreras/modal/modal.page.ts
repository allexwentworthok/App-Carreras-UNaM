import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Plugins } from '@capacitor/core';
import { Browser } from '@capacitor/core';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})

export class ModalPage {
  @Input() nombre;
  @Input() img;
  @Input() descripcion;
  @Input() pdf;
  @Input() ubicacion;
  @Input() carreras: [];

  constructor( private modalCtrl: ModalController, public apiService: ApiService, public InAppBrowserOptions: InAppBrowser ) { }


  async verPdf(pdf) {
    const url = (pdf);
    await Browser.open({'url': url});
  }

  ionViewWillEnter() {
    // Used ionViewWillEnter as ngOnInit is not
    // called due to view persistence in Ionic
    this.getAllStudents();
  }


  getAllStudents() {
    // Get saved list of students
    this.apiService.getListArtes().subscribe(response => {
      console.log(response);
      this.carreras = response;
    });
  }
 async regresar(){

    const modal = await this.modalCtrl.getTop();
    modal.dismiss();
  }

  salirModal() {
    this.modalCtrl.dismiss();
  }


}
