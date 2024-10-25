import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  constructor(
    private title: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  init() {
    const appTitle = 'AI-Driven Genomics Book';
    
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let route = this.activatedRoute;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter(route => route.outlet === 'primary')
    ).subscribe(route => {
      const routeTitle = route.snapshot.data['title'];
      if (routeTitle) {
        this.title.setTitle(`${routeTitle} | ${appTitle}`);
      } else {
        this.title.setTitle(appTitle);
      }
    });
  }

  setTitle(newTitle: string) {
    this.title.setTitle(`${newTitle} | AI-Driven Genomics Book`);
  }
}