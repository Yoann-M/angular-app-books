import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../../models/Book.model'
import { Subscription } from 'rxjs';
import { BooksService } from '../../services/books.service';
import { Router } from '@angular/router';
declare var UIkit: any;

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit, OnDestroy {

  books: Book[];
  bookSubscription: Subscription;

  constructor(
    private bookService: BooksService,
    private router: Router) { }

  ngOnInit() {
    this.bookSubscription = this.bookService.bookSubject.subscribe(
      (books: Book[]) => {
        this.books = books;
      }
    );
    this.bookService.getBooks();
    this.bookService.emitBooks();
  }

  onNewBook() {
    this.router.navigate(['/books', 'new']);
  }

  onPreventDeleteBook(book: Book) {
    UIkit.modal.confirm(
      'Souhaitez vous réellement supprimer le livre :<br><strong>' + book.title + '</strong>',
      {labels: { ok: 'Confirmer', cancel: 'Annuler' }, stack: true })
    .then(() => {
      this.onDeleteBook(book);
    }, (error) => {
      return false;
    });
  }
  onDeleteBook(book: Book) {
    this.bookService.removeBook(book);
  }

  onViewBook(id: number) {
    this.router.navigate(['/books', 'view', id]);
  }

  ngOnDestroy() {
    this.bookSubscription.unsubscribe();

  }
}
