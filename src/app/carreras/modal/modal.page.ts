import { Component, OnInit, Input } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Plugins } from '@capacitor/core';
import { Browser } from '@capacitor/core';
import { Downloader, DownloadRequest, NotificationVisibility } from '@ionic-native/downloader/ngx';

import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';


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

  

  constructor( private downloader: Downloader, private platform: Platform ,private modalCtrl: ModalController, public apiService: ApiService, private file: File, private transfer: FileTransfer, private document: DocumentViewer ) { }


  async verPdf(pdf) {
    //const url = (pdf);
    //await Browser.open({'url': url});
    /*var request: DownloadRequest = {
      uri: url,
      title: 'Mi_Carrera',
      description: '',
      mimeType: '',
      visibleInDownloadsUi: true,
      notificationVisibility: NotificationVisibility.VisibleNotifyCompleted,
      destinationInExternalFilesDir: {
          dirType: 'Downloads',
          subPath: 'MyFile.apk'
      }
  };

    this.downloader.download(request)
    .then((location: string) => console.log('File downloaded at:'+location))
    .catch((error: any) => console.error(error));
    */
    let path = null;

    if (this.platform.is("ios")) {
      path = this.file.documentsDirectory;
    } else{
      path = this.file.dataDirectory;
    }

    const transfer = this.transfer.create();
    transfer.download(pdf, path + 'myfile.pdf').then(entry => {
      let url = entry.toURL();
      this.document.viewDocument(url, 'application/pdf', {});
    })

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
