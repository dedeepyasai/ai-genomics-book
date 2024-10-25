import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Route Components
import { HomeComponent } from './routes/home/home.component';
import { NotFoundComponent } from './routes/not-found/not-found.component';

// Feature Components
import { NavigationComponent } from './components/navigation/navigation.component';
import { ChapterComponent } from './components/chapter/chapter.component';
import { SubChapterComponent } from './components/sub-chapter/sub-chapter.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { CodingExerciseComponent } from './components/coding-exercise/coding-exercise.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    NavigationComponent,
    ChapterComponent,
    SubChapterComponent,
    QuizComponent,
    CodingExerciseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }