import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
//import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BookService {

  private booksUrl = 'https://bibliotecadas.herokuapp.com/api';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  // Get all the books from the API: PROMISE
  /*getAllBooks() {
    return this.http.get('/api/books')
      .map(res => res.json());
  }*/

  getAllBooks(): Promise<any[]> {
      return this.http.get(this.booksUrl+"/books")
          .toPromise()
          .then(response => response.json())
          .catch(this.handleError);
  }


  getBook(title: string) {
      return this.getAllBooks()
          .then(books => books.find(book => book.title === title));
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  update(book: any): Promise<any> {
      const url = `${this.booksUrl+"/books"}/${book.title}`;
      return this.http
          .put(url, JSON.stringify(book), {headers: this.headers})
          .toPromise()
          .then(() => book)
          .catch(this.handleError);
  }

  create(title: string): Promise<any> {
      return this.http
          .post(this.booksUrl+"/books", JSON.stringify({title: title}), {headers: this.headers})
          .toPromise()
          .then(res => res.json())
          .catch(this.handleError);
  }

  delete(book: any): Promise<void> {
    const url = `${this.booksUrl+"/books"}/${book.title}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);

  }

  getUserBooks(): Promise<any[]> {
    return this.http.get(this.booksUrl+"/user")
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  addtoUserLibrary(book: any): Promise<void>{
    return this.http
      .post(this.booksUrl+"/user", JSON.stringify({title: book.title, author: book.author, description:book.description}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  removeFromUserLibrary(book: any): Promise<void> {
    const url = `${this.booksUrl+"/user"}/${book.title}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}
