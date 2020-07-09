import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Plugins } from '@capacitor/core';
import { Browser } from '@capacitor/core';
@Component({
  selector: 'app-menu-autogestion',
  templateUrl: './menu-autogestion.page.html',
  styleUrls: ['./menu-autogestion.page.scss'],
})
export class MenuAutogestionPage {

  constructor(public InAppBrowserOptions: InAppBrowser) { }

  async pistasWeb() {
    const url = 'https://pistasdecarreras.unam.edu.ar';
    await Browser.open({'url': url});
  }

}
