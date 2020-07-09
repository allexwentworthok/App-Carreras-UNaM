
import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-academicas',
  templateUrl: './academicas.page.html',
  styleUrls: ['./academicas.page.scss'],
})
export class AcademicasPage {
  carrerasNuevas: any;
  constructor(public apiService: ApiService) { this.carrerasNuevas = [];}
  
  ionViewWillEnter() {
    
    this.getAllStudents();
  }


  getAllStudents() {
    this.apiService.getListExactas().subscribe(response => {
      console.log(response);
      this.carrerasNuevas = response;
    })
  }

}
