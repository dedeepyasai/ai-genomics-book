import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

// Import route components
import { HomeComponent } from './routes/home/home.component';
import { ChapterComponent } from './components/chapter/chapter.component';
import { SubChapterComponent } from './components/sub-chapter/sub-chapter.component';
import { NotFoundComponent } from './routes/not-found/not-found.component';
import { ChapterExistsGuard } from './guards/chapter-exists.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'chapter',
    children: [
      {
        path: ':id',
        component: ChapterComponent
      },
      {
        path: ':id/subchapter/:subId',
        component: SubChapterComponent
      }
    ]
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  },
  {
    path: 'chapter',
    children: [
      {
        path: ':id',
        component: ChapterComponent,
        canActivate: [ChapterExistsGuard]
      },
      {
        path: ':id/subchapter/:subId',
        component: SubChapterComponent,
        canActivate: [ChapterExistsGuard]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
export class AppRoutingModule { }