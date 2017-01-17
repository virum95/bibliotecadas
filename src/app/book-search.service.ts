import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class BookSearchService {

  constructor(private http: Http) {}
    search(term: string): Observable<any[]> {
        return this.http
            .get(`https://bibliotecadas.herokuapp.com/api/books/`+term)
            .map((r: Response) => r.json());
    }
}
