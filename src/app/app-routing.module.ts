import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'academicas',
    loadChildren: () => import('./academicas/academicas.module').then( m => m.AcademicasPageModule)
  },
  {
    path: 'exactas',
    loadChildren: () => import('./carreras/exactas/exactas.module').then( m => m.ExactasPageModule)
  },
  {
    path: 'humanidades',
    loadChildren: () => import('./carreras/humanidades/humanidades.module').then( m => m.HumanidadesPageModule)
  },
  {
    path: 'forestales',
    loadChildren: () => import('./carreras/forestales/forestales.module').then( m => m.ForestalesPageModule)
  },
  {
    path: 'fio',
    loadChildren: () => import('./carreras/fio/fio.module').then( m => m.FioPageModule)
  },
  {
    path: 'artes',
    loadChildren: () => import('./carreras/artes/artes.module').then( m => m.ArtesPageModule)
  },
  {
    path: 'economicas',
    loadChildren: () => import('./carreras/economicas/economicas.module').then( m => m.EconomicasPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./carreras/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'autogestion',
    loadChildren: () => import('./autogestion/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'aula-home',
    loadChildren: () => import('./aula/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'menu-autogestion',
    loadChildren: () => import('./menu-autogestion/menu-autogestion.module').then( m => m.MenuAutogestionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
