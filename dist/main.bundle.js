webpackJsonp([0,3],{

/***/ 151:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BookService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookService = (function () {
    function BookService(http) {
        this.http = http;
        this.booksUrl = 'https://bibliotecadas.herokuapp.com/api'; // URL to web api
        //private booksUrl = 'http://localhost:3000/api';  // URL to web api
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    // Get all the books from the API: PROMISE
    /*getAllBooks() {
      return this.http.get('/api/books')
        .map(res => res.json());
    }*/
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
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    BookService.prototype.update = function (book) {
        var url = (this.booksUrl + "/books") + "/" + book.title;
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
        var url = (this.booksUrl + "/books") + "/" + book.title;
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
        var url = (this.booksUrl + "/user") + "/" + book.title;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    BookService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], BookService);
    return BookService;
    var _a;
}());
//# sourceMappingURL=/home/virum/4/DAS/library3/bibliotecadas/src/book.service.js.map

/***/ },

/***/ 384:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 384;


/***/ },

/***/ 385:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(503);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/virum/4/DAS/library3/bibliotecadas/src/main.js.map

/***/ },

/***/ 502:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Library';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(668),
            styles: [__webpack_require__(663)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/virum/4/DAS/library3/bibliotecadas/src/app.component.js.map

/***/ },

/***/ 503:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__book_service__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__books_books_component__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__book_detail_book_detail_component__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__book_search_book_search_component__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_books_user_books_component__ = __webpack_require__(508);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var routes = [
    { path: '', redirectTo: '/books', pathMatch: 'full' },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_9__book_search_book_search_component__["a" /* BookSearchComponent */] },
    { path: 'books/:title', component: __WEBPACK_IMPORTED_MODULE_8__book_detail_book_detail_component__["a" /* BookDetailComponent */] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_10__user_books_user_books_component__["a" /* UserBooksComponent */] },
    { path: 'books', component: __WEBPACK_IMPORTED_MODULE_7__books_books_component__["a" /* BooksComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__books_books_component__["a" /* BooksComponent */],
                __WEBPACK_IMPORTED_MODULE_8__book_detail_book_detail_component__["a" /* BookDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_9__book_search_book_search_component__["a" /* BookSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_10__user_books_user_books_component__["a" /* UserBooksComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(routes) // Add routes to the app
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__book_service__["a" /* BookService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/virum/4/DAS/library3/bibliotecadas/src/app.module.js.map

/***/ },

/***/ 504:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__book_service__ = __webpack_require__(151);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BookDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





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
    BookDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-book-detail',
            template: __webpack_require__(669),
            styles: [__webpack_require__(664)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__book_service__["a" /* BookService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__book_service__["a" /* BookService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* Location */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* Location */]) === 'function' && _c) || Object])
    ], BookDetailComponent);
    return BookDetailComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/virum/4/DAS/library3/bibliotecadas/src/book-detail.component.js.map

/***/ },

/***/ 505:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(205);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BookSearchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookSearchService = (function () {
    function BookSearchService(http) {
        this.http = http;
    }
    BookSearchService.prototype.search = function (term) {
        return this.http
            .get("https://bibliotecadas.herokuapp.com/api/books/" + term)
            .map(function (r) { return r.json(); });
    };
    BookSearchService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], BookSearchService);
    return BookSearchService;
    var _a;
}());
//# sourceMappingURL=/home/virum/4/DAS/library3/bibliotecadas/src/book-search.service.js.map

/***/ },

/***/ 506:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__book_search_service__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BookSearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BookSearchComponent = (function () {
    function BookSearchComponent(bookSearchService, router) {
        this.bookSearchService = bookSearchService;
        this.router = router;
        this.searchTerms = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.terms = "";
    }
    // Push a search term into the observable stream.
    BookSearchComponent.prototype.search = function (term) {
        if (term != "")
            this.searchTerms.next(term);
    };
    BookSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.books = this.searchTerms
            .debounceTime(300) // wait for 300ms pause in events
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(function (term) { return term // switch to new observable each time
            ? _this.bookSearchService.search(term)
            : __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of([]); });
    };
    BookSearchComponent.prototype.gotoDetail = function (book) {
        var link = ['/books', book.title];
        this.router.navigate(link);
    };
    BookSearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-book-search',
            template: __webpack_require__(670),
            styles: [__webpack_require__(665)],
            providers: [__WEBPACK_IMPORTED_MODULE_4__book_search_service__["a" /* BookSearchService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__book_search_service__["a" /* BookSearchService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__book_search_service__["a" /* BookSearchService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], BookSearchComponent);
    return BookSearchComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/virum/4/DAS/library3/bibliotecadas/src/book-search.component.js.map

/***/ },

/***/ 507:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_service__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BooksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BooksComponent = (function () {
    function BooksComponent(bookService, router) {
        this.bookService = bookService;
        this.router = router;
        // instantiate posts to an empty array
        this.books = [];
    }
    BooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Retrieve posts from the API
        this.bookService.getAllBooks().then(function (books) {
            _this.books = books;
        });
    };
    BooksComponent.prototype.onSelect = function (book) {
        this.selectedBook = book;
    };
    BooksComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/books', this.selectedBook.title]);
    };
    BooksComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-books',
            template: __webpack_require__(671),
            styles: [__webpack_require__(666)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__book_service__["a" /* BookService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__book_service__["a" /* BookService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], BooksComponent);
    return BooksComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/virum/4/DAS/library3/bibliotecadas/src/books.component.js.map

/***/ },

/***/ 508:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_service__ = __webpack_require__(151);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UserBooksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserBooksComponent = (function () {
    function UserBooksComponent(bookService, router) {
        this.bookService = bookService;
        this.router = router;
        // instantiate posts to an empty array
        this.books = [];
    }
    UserBooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Retrieve posts from the API
        this.bookService.getUserBooks().then(function (books) {
            _this.books = books;
        });
    };
    UserBooksComponent.prototype.onSelect = function (book) {
        this.selectedBook = book;
    };
    UserBooksComponent.prototype.deleteBook = function () {
        this.bookService.removeFromUserLibrary(this.selectedBook);
        console.log("Book removed correctly");
        location.reload();
    };
    UserBooksComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/books', this.selectedBook.title]);
    };
    UserBooksComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-user-books',
            template: __webpack_require__(672),
            styles: [__webpack_require__(667)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__book_service__["a" /* BookService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__book_service__["a" /* BookService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], UserBooksComponent);
    return UserBooksComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/virum/4/DAS/library3/bibliotecadas/src/user-books.component.js.map

/***/ },

/***/ 509:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/virum/4/DAS/library3/bibliotecadas/src/environment.js.map

/***/ },

/***/ 510:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/home/virum/4/DAS/library3/bibliotecadas/src/polyfills.js.map

/***/ },

/***/ 663:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 664:
/***/ function(module, exports) {

module.exports = "textarea {\n  margin-bottom: 15px;\n}\n\nbutton {\n  margin-bottom: 5px;\n}\n"

/***/ },

/***/ 665:
/***/ function(module, exports) {

module.exports = "#search-box {\n  background-position: 10px 12px; /* Position the search icon */\n  background-repeat: no-repeat; /* Do not repeat the icon image */\n  width: 100%; /* Full-width */\n  font-size: 16px; /* Increase font-size */\n  padding: 12px 20px 12px 40px; /* Add some padding */\n  border: 1px solid #ddd; /* Add a grey border */\n  margin-bottom: 12px; /* Add some space below the input */\n}\n\n#myUL {\n  /* Remove default list styling */\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\n#myUL li {\n\n  border: 1px solid #ddd !important; /* Add a border to all links */\n  margin-top: -1px; /* Prevent double borders */\n  background-color: #f6f6f6; /* Grey background color */\n  padding: 12px; /* Add some padding */\n  text-decoration: none; /* Remove default text underline */\n  font-size: 18px; /* Increase the font-size */\n  color: black; /* Add a black text color */\n  display: block; /* Make it into a block element to fill the whole list */\n}\n\n#myUL li {\n  background-color: #eee; /* Add a darker background color for headers */\n  cursor: default; /* Change cursor style */\n}\n\n#myUL li:hover {\n  background-color: #e2e2e2; /* Add a hover effect to all links, except for headers */\n}\n"

/***/ },

/***/ 666:
/***/ function(module, exports) {

module.exports = "li{\n  list-style-type:none;\n  padding-left: 15px;\n}\n\n.selected {\n  border-radius: 5px;\n  border: 2px solid #000000;\n  padding: 10px;\n  background-color: #E2E2E2;\n}\n.books {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n}\n.books li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n}\n.books li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n}\n.books li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n}\n.books .text {\n    position: relative;\n    top: -3px;\n}\n.books .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n}\nbutton.delete {\n    float:right;\n    margin-top: 2px;\n    margin-right: .8em;\n    background-color: gray !important;\n    color:white;\n}\n"

/***/ },

/***/ 667:
/***/ function(module, exports) {

module.exports = "li{\n  list-style-type:none;\n  padding-left: 15px;\n}\n\n.selected {\n  border-radius: 5px;\n  border: 2px solid #000000;\n  padding: 10px;\n  background-color: #E2E2E2;\n}\n\n.books {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n}\n.books li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.books li.selected:hover {\n  background-color: #BBD8DC !important;\n  color: white;\n}\n.books li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.books .text {\n  position: relative;\n  top: -3px;\n}\n.books .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\nbutton.delete {\n  float:right;\n  margin-top: 2px;\n  margin-right: .8em;\n  background-color: gray !important;\n  color:white;\n}\n"

/***/ },

/***/ 668:
/***/ function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"/books\">{{title}}</a>\n    </div>\n    <div>\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\"><a href=\"/books\">All the books</a></li>\n        <li><a href=\"/user\">User books</a></li>\n        <li><a href=\"/search\">Search</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<router-outlet></router-outlet>\n"

/***/ },

/***/ 669:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n<h4>\n  {{book.title}}\n</h4>\n<h5>\n  {{book.author}}\n</h5>\n  <div>\n    <textarea class=\"form-control\" rows=\"5\" [(ngModel)]=\"book.description\" placeholder=\"Description\"></textarea>\n  </div>\n  <button (click)=\"goBack()\" type=\"button\" class=\"btn btn-default\">Go Back</button>\n  <button (click)=\"delete()\" type=\"button\" class=\"btn btn-danger\">Delete</button>\n  <button (click)=\"save()\" id=\"desc\" type=\"button\" class=\"btn btn-warning\">Update description</button>\n  <button (click)=\"addtoUserLibrary()\" type=\"button\" class=\"btn btn-success\">Add to my library</button>\n  <a href=\"{{book.url}}\" role=\"button\" class=\"btn btn-link\">Link</a>\n</div>\n"

/***/ },

/***/ 670:
/***/ function(module, exports) {

module.exports = "<div class=\"container\" id=\"search-component\">\n  <h4>Book Search</h4>\n  <div class=\"col-md-6 \">\n  <input type=\"text\" class=\"form-control\" #searchBox id=\"search-box\" (keyup)=\"search(searchBox.value)\" placeholder=\"Search for titles..\" />\n  <ul id=\"myUL\">\n    <li *ngFor=\"let book of books | async\"\n         (click)=\"gotoDetail(book)\" class=\"search-result\" >\n      {{book.title}}\n    </li>\n  </ul>\n  </div>\n  <div class=\"col-md-6\">\n\n  </div>\n</div>\n"

/***/ },

/***/ 671:
/***/ function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"container\">\n  <li class=\"row\" *ngFor=\"let book of books\" [class.selected]=\"book=== selectedBook\" (click)=\"onSelect(book)\">\n    <h4 class=\"card-title\">{{ book.title }}</h4>\n    <p class=\"card-text\"> by {{book.author}}</p>\n    <div *ngIf=\"selectedBook===book\">\n      <button (click)=\"gotoDetail()\" class=\"btn btn-info\">Book Details</button>\n    </div>\n  </li>\n</div>\n</div>\n"

/***/ },

/***/ 672:
/***/ function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <h3>My Books</h3>\n  <div *ngIf=\"books.length == 0\">\n    <h4>You have no books</h4>\n  </div>\n  <li class=\"row\" *ngFor=\"let book of books\" [class.selected]=\"book=== selectedBook\" (click)=\"onSelect(book)\">\n    <h4 class=\"card-title\">{{ book.title }}</h4>\n    <p class=\"card-text\">by {{book.author}}</p>\n    <div *ngIf=\"selectedBook===book\">\n      <button (click)=\"deleteBook()\" class=\"btn btn-danger\">Delete book</button>\n      <button (click)=\"gotoDetail()\" class=\"btn btn-info\">Book Details</button>\n    </div>\n  </li>\n</div>\n"

/***/ },

/***/ 699:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(385);


/***/ }

},[699]);
//# sourceMappingURL=main.bundle.map