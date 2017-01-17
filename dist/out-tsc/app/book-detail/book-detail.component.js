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
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { BookService } from '../book.service';
var BookDetailComponent = (function () {
    function BookDetailComponent(bookService, route, location) {
        this.bookService = bookService;
        this.route = route;
        this.location = location;
        this.book = {};
    }
    BookDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.bookService.getBook(params['title']); })
            .subscribe(function (book) { return _this.book = book; });
    };
    BookDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    BookDetailComponent.prototype.save = function () {
        this.bookService.update(this.book)
            .then(function () {
            console.log("Book updated correctly.");
            location.reload();
        });
    };
    BookDetailComponent.prototype.delete = function () {
        var _this = this;
        this.bookService.delete(this.book)
            .then(function () {
            console.log("Book deleted correctly.");
            _this.goBack();
        });
    };
    BookDetailComponent.prototype.addtoUserLibrary = function () {
        var _this = this;
        this.bookService.addtoUserLibrary(this.book)
            .then(function () {
            console.log("Book added correctly.");
            _this.goBack();
        });
    };
    return BookDetailComponent;
}());
BookDetailComponent = __decorate([
    Component({
        selector: 'app-book-detail',
        templateUrl: './book-detail.component.html',
        styleUrls: ['./book-detail.component.css']
    }),
    __metadata("design:paramtypes", [BookService,
        ActivatedRoute,
        Location])
], BookDetailComponent);
export { BookDetailComponent };
//# sourceMappingURL=../../../../src/app/book-detail/book-detail.component.js.map