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
import { Http } from '@angular/http';
var BookSearchService = (function () {
    function BookSearchService(http) {
        this.http = http;
    }
    BookSearchService.prototype.search = function (term) {
        return this.http
            .get("http://localhost:3000/app/books/?name=" + term)
            .map(function (r) { return r.json(); });
    };
    return BookSearchService;
}());
BookSearchService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], BookSearchService);
export { BookSearchService };
//# sourceMappingURL=../../../src/app/book-search.service.js.map