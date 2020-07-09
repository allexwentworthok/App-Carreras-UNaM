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


  async aulaExactas() {
    const url = 'https://www.fceqyn.unam.edu.ar/aula-virtual/';
    await Browser.open({'url': url});
  }

  async aulaHumanidades() {
    const url = 'http://aulavirtual.fhycs.unam.edu.ar/';
    await Browser.open({'url': url});
  }

  async aulaHForestales() {
    const url = 'https://aula.facfor.unam.edu.ar/';
    await Browser.open({'url': url});
  }

  async aulaArtes() {
    const url = 'https://aulavirtual.fayd.unam.edu.ar/';
    await Browser.open({'url': url});
  }

  async aulaEconomicas() {
    const url = 'https://virtual.fce.unam.edu.ar/';
    await Browser.open({'url': url});
  }

  async aulaIngenieria() {
    const url = 'https://aulavirtual.fio.unam.edu.ar/';
    await Browser.open({'url': url});
  }

  async aulaEscenf() {
    const url = 'https://aulavirtual.escenf.unam.edu.ar/';
    await Browser.open({'url': url});
  }

  async aulaEae() {
    const url = 'https://aulavirtual.eae.unam.edu.ar/';
    await Browser.open({'url': url});
  }

}
