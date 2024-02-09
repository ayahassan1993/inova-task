import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: "full"
      },
      {
        path: 'home',
        loadChildren: () => import(`../../modules/home-page/home-page.module`).then(m => m.HomePageModule)
      },
      {
        path: 'e-books',
        loadChildren: () => import(`../../modules/e-books/e-books.module`).then(m => m.EBooksModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
