import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { BookSearchService } from '../book-search.service';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css'],
  providers: [BookSearchService]
})
export class BookSearchComponent implements OnInit {
  books: Observable<any[]>;
  private searchTerms = new Subject<string>();
  terms: string = "";
  constructor(
      private bookSearchService: BookSearchService,
      private router: Router) {}
  // Push a search term into the observable stream.
  search(term: string): void {
   if(term != "")
      this.searchTerms.next(term);
  }
  ngOnInit(): void {
      this.books = this.searchTerms
          .debounceTime(300)        // wait for 300ms pause in events
          .distinctUntilChanged()   // ignore if next search term is same as previous
          .switchMap(term => term   // switch to new observable each time
              // return the http search observable
              ? this.bookSearchService.search(term)
              // or the observable of empty books if no search term
              : Observable.of<any[]>([]));
  }
  gotoDetail(book: any): void {
      let link = ['/books', book.title];
      this.router.navigate(link);
  }
}
