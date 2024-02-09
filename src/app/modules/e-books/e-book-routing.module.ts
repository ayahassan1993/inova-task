import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EBooksListComponent } from './pages/e-books-list/e-books-list.component';
import { EBookDetaliesComponent } from './pages/e-book-detalies/e-book-detalies.component';

const routes: Routes = [
    {
        path: '',
        component: EBooksListComponent
    },
    {
        path: "ebook-details/:id",
        component: EBookDetaliesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EbookRoutingModule { }
