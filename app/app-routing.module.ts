import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'create', loadChildren: './create/create.module#CreatePageModule' },
  { path: 'detail/:key', loadChildren: './detail/detail.module#DetailPageModule' },
  { path: 'edit/:key', loadChildren: './edit/edit.module#EditPageModule' },

  { path: 'crearp', loadChildren: './crearp/crearp.module#CrearpPageModule' },
  { path: 'detailp/:key', loadChildren: './detailp/detailp.module#DetailpPageModule' },
  { path: 'editp/:key', loadChildren: './editp/editp.module#EditpPageModule' },
  { path: 'participantesp/:key', loadChildren: './participantesp/participantesp.module#ParticipantespPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
