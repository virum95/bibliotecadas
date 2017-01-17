import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { BookService } from '../book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: any = {};

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params
        .switchMap((params: Params) => this.bookService.getBook(params['title']))
        .subscribe(book => this.book = book);
  }

    goBack(): void {
      this.location.back();
    }

    save(): void {
      this.bookService.update(this.book)
          .then(() => {
            console.log("Book updated correctly.");
            location.reload();
      });
    }

    delete(): void {
      this.bookService.delete(this.book.title)
          .then(() => {
            console.log("Book deleted correctly.");
            this.goBack();
      });
    }

    addtoUserLibrary(): void {
      this.bookService.addtoUserLibrary(this.book)
        .then( () => {
      console.log("Book added correctly.");
      this.goBack();
    });
    }


}
