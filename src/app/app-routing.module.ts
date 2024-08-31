import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component'; 
import { AppComponent } from './app.component';
import { RecetteListComponent } from './recette-list/recette-list.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { VacancesComponent } from './vacances/vacances.component';


const routes: Routes = [
  { path: '', component: AppComponent }, // La route principale
  { path: 'about', component: AboutComponent }, // La route pour la page 'About'
  { path: 'recette-list', component: RecetteListComponent }, // La route pour la page 'RecetteList'
  { path: 'todo-list', component: TodoListComponent }, // La route pour la page 'Todo-list'
  { path: 'vacances', component: VacancesComponent} // La route pour la page 'Vacances'
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
