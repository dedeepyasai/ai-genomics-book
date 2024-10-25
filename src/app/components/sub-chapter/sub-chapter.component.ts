import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';
import { SubChapter } from '../../models/book.model';

@Component({
  selector: 'app-sub-chapter',
  templateUrl: './sub-chapter.component.html'
})
export class SubChapterComponent implements OnInit {
  subChapter?: SubChapter;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const chapterId = parseInt(params['id'], 10);
      const subChapterId = params['subId'];
      this.bookService.getSubChapter(chapterId, subChapterId).subscribe(
        subChapter => this.subChapter = subChapter
      );
    });
  }
}