import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component'; 
//import { AppComponent } from './app.component';

const routes: Routes = [
  //{ path: '', component: AppComponent }, // La route principale
  { path: 'about', component: AboutComponent }, // La route pour la page 'About'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
