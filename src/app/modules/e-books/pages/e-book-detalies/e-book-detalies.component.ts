import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { EBookService } from '../../services/e-boo.service';
import { ActivatedRoute } from '@angular/router';
import { Ebook } from '../../models/e-book.mobel';

@Component({
  selector: 'app-e-book-detalies',
  templateUrl: './e-book-detalies.component.html',
  styleUrls: ['./e-book-detalies.component.scss']
})
export class EBookDetaliesComponent {
  subscription = new Subscription();
  book!: Ebook
  constructor(private ebookService: EBookService, private activeRout: ActivatedRoute) { }

  ngOnInit() {
    let id = this.activeRout.snapshot.params['id']
    this.getBook(id)
  }

  getBook(id: number) {
    this.subscription.add(
      this.ebookService.getBookDetails(id).subscribe({
        next: (res: Ebook) => {
          this.book = res
        },
      })
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
