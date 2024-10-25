import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import route components
import { HomeComponent } from './routes/home/home.component';
import { ChapterComponent } from './components/chapter/chapter.component';
import { SubChapterComponent } from './components/sub-chapter/sub-chapter.component';
import { NotFoundComponent } from './routes/not-found/not-found.component';

// Import guard
import { ChapterExistsGuard } from './guards/chapter-exists.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    data: { title: 'AI-Driven Genomics Book' }
  },
  {
    path: 'chapter',
    children: [
      {
        path: ':id',
        component: ChapterComponent,
        canActivate: [ChapterExistsGuard],
        data: { title: 'Chapter' }
      },
      {
        path: ':id/subchapter/:subId',
        component: SubChapterComponent,
        canActivate: [ChapterExistsGuard],
        data: { title: 'Subchapter' }
      }
    ]
  },
  {
    path: '404',
    component: NotFoundComponent,
    data: { title: 'Page Not Found' }
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64] // Offset for fixed header if you have one
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }