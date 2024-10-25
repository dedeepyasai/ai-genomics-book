import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Chapter, SubChapter } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly bookData: Chapter[] = [
    {
      id: 1,
      title: 'Genomic Data Acquisition and Processing',
      description: 'Introduction to genomic data types and processing techniques.',
      subChapters: [
        {
          id: '1.1',
          title: 'Understanding Genomic Data',
          content: `Genomic data encompasses various types of information...`,
          imageUrl: 'assets/images/genomic-data.png',
          quiz: [
            {
              question: 'What is the primary purpose of FASTQ files?',
              options: [
                'To store aligned sequences',
                'To store raw sequences and quality scores',
                'To store variants',
                'To store annotations'
              ],
              correctAnswer: 'To store raw sequences and quality scores'
            }
          ]
        }
      ],
      codingExercises: [
        {
          title: 'Parse FASTQ Files',
          description: 'Create a function to parse FASTQ format files',
          starterCode: 'def parse_fastq(file_path):\n    # Your code here\n    pass',
          solution: '# Complete solution here'
        }
      ]
    }
    // Add more chapters...
  ];

  getChapters(): Observable<Chapter[]> {
    return of(this.bookData);
  }

  getChapter(id: number): Observable<Chapter | undefined> {
    return of(this.bookData.find(chapter => chapter.id === id));
  }

  getSubChapter(chapterId: number, subChapterId: string): Observable<SubChapter | undefined> {
    const chapter = this.bookData.find(ch => ch.id === chapterId);
    return of(chapter?.subChapters.find(sub => sub.id === subChapterId));
  }
}