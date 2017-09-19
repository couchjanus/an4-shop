import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent, CatalogComponent, AddComponent, ShowComponent } from './';

const routes: Routes = [
   {
    path: '',
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'list',
        component: CatalogComponent,
      },
      {
        path: 'add', 
        component: AddComponent
      },
      {
        path: 'show/:id', 
        component: ShowComponent, 
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
