import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {BookService} from "../book.service";

@Component({
  selector: 'app-user-books',
  templateUrl: './user-books.component.html',
  styleUrls: ['./user-books.component.css']
})
export class UserBooksComponent implements OnInit {
  // instantiate posts to an empty array
  books: any = [];
  selectedBook: any;

  constructor(
    private bookService: BookService,
    private router: Router) { }

  ngOnInit() {
    // Retrieve posts from the API
    this.bookService.getUserBooks().then(books => {
      this.books = books;
    });
  }

  onSelect(book: any): void {
    this.selectedBook = book;
  }

  deleteBook(): void {
    this.bookService.removeFromUserLibrary(this.selectedBook);
    console.log("Book removed correctly");
    location.reload();

  }

  gotoDetail(): void {
    this.router.navigate(['/books', this.selectedBook.title]);
  }

}

