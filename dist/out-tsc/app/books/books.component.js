var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
var BooksComponent = (function () {
    function BooksComponent(bookService, router) {
        this.bookService = bookService;
        this.router = router;
        this.books = [];
    }
    BooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookService.getAllBooks().then(function (books) {
            _this.books = books;
        });
    };
    BooksComponent.prototype.onSelect = function (book) {
        this.selectedBook = book;
    };
    BooksComponent.prototype.gotoDetail = function (book) {
        this.router.navigate(['/detail', book.title]);
    };
    return BooksComponent;
}());
BooksComponent = __decorate([
    Component({
        selector: 'app-books',
        templateUrl: './books.component.html',
        styleUrls: ['./books.component.css']
    }),
    __metadata("design:paramtypes", [BookService,
        Router])
], BooksComponent);
export { BooksComponent };
//# sourceMappingURL=../../../../src/app/books/books.component.js.map