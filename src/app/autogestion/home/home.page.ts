import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Plugins } from '@capacitor/core';
import { Browser } from '@capacitor/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage  {

  constructor(public InAppBrowserOptions: InAppBrowser) { }

  async autogestionExactas() {
    const url = 'https://www.fceqyn.unam.edu.ar/siu-guarani/';
    await Browser.open({'url': url});
  }

  async autogestionHumanidades() {
    const url = 'https://autogestion.fhycs.unam.edu.ar/';
    await Browser.open({'url': url});
  }

  async autogestionHForestales() {
    const url = 'http://www.facfor.unam.edu.ar/';
    await Browser.open({'url': url});
  }

  async autogestionArtes() {
    const url = 'http://guarani.artes.unam.edu.ar:8016/autguarani/';
    await Browser.open({'url': url});
  }

  async autogestionEconomicas() {
    const url = 'https://guarani.fce.unam.edu.ar/v293/';
    await Browser.open({'url': url});
  }


  async autogestionIngenieria() {
    const url = 'https://www.fio.unam.edu.ar/';
    await Browser.open({'url': url});
  }

  async autogestionEscenf() {
    const url = 'http://autogestion.escenf.unam.edu.ar/siu/3w/';
    await Browser.open({'url': url});
  }

  async apistasWeb() {
    const url = 'https://pistasdecarreras.unam.edu.ar';
    await Browser.open({'url': url});
  }


}
