import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slides: { img: string, titulo: string, desc: string }[] = [
    {
      img:'/assets/graficos/home1.svg',
      titulo: 'Todo lo que podés estudiar en la universidad',
      desc: '/assets/graficos/logo-unam.jpg',
    },
    {
      img:'/assets/graficos/home2.svg',
      titulo: '¿Eres estudiante?',
      desc: '',
    },
    
];


constructor(private navCtrl: NavController) { }

ngOnInit() {
}
onClick() {
  this.navCtrl.navigateBack('tabs/tabs/tab2');
}
}