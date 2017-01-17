import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  // instantiate posts to an empty array
  books: any = [];
  selectedBook: any;

  constructor(
    private bookService: BookService,
    private router: Router) { }

  ngOnInit() {
    // Retrieve posts from the API
    this.bookService.getAllBooks().then(books => {
      this.books = books;
    });
  }

  onSelect(book: any): void {
      this.selectedBook = book;
  }


  gotoDetail(): void {
      this.router.navigate(['/books', this.selectedBook.title]);
  }

}
