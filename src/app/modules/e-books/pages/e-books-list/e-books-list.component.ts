import { Component, OnInit } from '@angular/core';
import { EBookService } from '../../services/e-boo.service';
import { Subscription } from 'rxjs';
import { Ebook } from '../../models/e-book.mobel';

@Component({
  selector: 'app-e-books-list',
  templateUrl: './e-books-list.component.html',
  styleUrls: ['./e-books-list.component.scss']
})
export class EBooksListComponent implements OnInit {
  subscription = new Subscription();
  books: Ebook[] = []
  constructor(private ebookService: EBookService) { }

  ngOnInit() {
    this.getBooks()
  }

  getBooks() {
    this.subscription.add(
      this.ebookService.getBooks('digital', 'book').subscribe({
        next: (res: Ebook[]) => {
          this.books = res
        },
      })
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
