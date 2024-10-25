import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BookService } from '../services/book.service';

@Injectable({
  providedIn: 'root'
})
export class ChapterExistsGuard {
  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot
  ): Observable<boolean | UrlTree> {
    const id = parseInt(route.paramMap.get('id') || '', 10);
    
    return this.bookService.getChapter(id).pipe(
      map(chapter => {
        if (chapter) {
          return true;
        }
        return this.router.createUrlTree(['/404']);
      })
    );
  }
}