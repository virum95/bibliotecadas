import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';

import { BookService } from './book.service'
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { UserBooksComponent } from './user-books/user-books.component';

const routes = [
    { path: '', redirectTo: '/books', pathMatch: 'full' },
    { path: 'search',  component: BookSearchComponent },
    { path: 'books/:title', component: BookDetailComponent },
    { path: 'user', component: UserBooksComponent },
    { path: 'books',     component: BooksComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookDetailComponent,
    BookSearchComponent,
    UserBooksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes) // Add routes to the app
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
