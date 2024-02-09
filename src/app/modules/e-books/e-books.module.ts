import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EBooksListComponent } from './pages/e-books-list/e-books-list.component';
import { EBookDetaliesComponent } from './pages/e-book-detalies/e-book-detalies.component';
import { EbookRoutingModule } from './e-book-routing.module';
import { MaterialModule } from 'src/app/shared/material.module';



@NgModule({
  declarations: [
    EBooksListComponent,
    EBookDetaliesComponent
  ],
  imports: [
    CommonModule,
    EbookRoutingModule,
    MaterialModule
  ]
})
export class EBooksModule { }
