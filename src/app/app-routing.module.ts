import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { SobreComponent } from './sobre/sobre.component';
import { IndexComponent } from './contatos/index/index.component';
import { ViewComponent } from './contatos/view/view.component';
import { CreateComponent } from './contatos/create/create.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'contato/index', component: IndexComponent },
  { path: 'contato/view/:id', component: ViewComponent },
  { path: 'contato/create', component: CreateComponent },
  { path: 'contato/edit/:id', component: CreateComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
