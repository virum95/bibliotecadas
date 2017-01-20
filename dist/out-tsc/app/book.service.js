var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
var BookService = (function () {
    function BookService(http) {
        this.http = http;
        this.booksUrl = 'https://bibliotecadas.herokuapp.com/api';
        this.headers = new Headers({ 'Content-Type': 'application/json' });
    }
    BookService.prototype.getAllBooks = function () {
        return this.http.get(this.booksUrl + "/books")
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BookService.prototype.getBook = function (title) {
        return this.getAllBooks()
            .then(function (books) { return books.find(function (book) { return book.title === title; }); });
    };
    BookService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        alert(error._body);
        return Promise.reject(error.message || error);
    };
    BookService.prototype.update = function (book) {
        var url = this.booksUrl + "/books" + "/" + book.title;
        return this.http
            .put(url, JSON.stringify(book), { headers: this.headers })
            .toPromise()
            .then(function () { return book; })
            .catch(this.handleError);
    };
    BookService.prototype.create = function (title) {
        return this.http
            .post(this.booksUrl + "/books", JSON.stringify({ title: title }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    BookService.prototype.delete = function (book) {
        var url = this.booksUrl + "/books" + "/" + book.title;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    BookService.prototype.getUserBooks = function () {
        return this.http.get(this.booksUrl + "/user")
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BookService.prototype.addtoUserLibrary = function (book) {
        return this.http
            .post(this.booksUrl + "/user", JSON.stringify({ title: book.title, author: book.author, description: book.description }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    BookService.prototype.removeFromUserLibrary = function (book) {
        var url = this.booksUrl + "/user" + "/" + book.title;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    return BookService;
}());
BookService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], BookService);
export { BookService };
//# sourceMappingURL=../../../src/app/book.service.js.map