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
      description: 'Introduction to genomic data types, acquisition methods, and processing techniques.',
      subChapters: [
        {
          id: '1.1',
          title: 'Understanding Genomic Data',
          content: `
            <div class="prose lg:prose-xl">
              <h2>Introduction to Genomic Data</h2>
              <p>
                Genomic data encompasses a wide range of information about an organism's genetic material.
                This section covers the fundamental concepts of genomic data types and their characteristics.
              </p>
              
              <h3>Key Aspects:</h3>
              <ul>
                <li>DNA sequence data</li>
                <li>RNA expression data</li>
                <li>Variant information</li>
                <li>Structural variations</li>
              </ul>
              
              <p>
                Understanding these different types of data is crucial for modern genomic analysis and
                its applications in personalized medicine.
              </p>
            </div>
          `,
          imageUrl: 'assets/images/genomic-data-types.png',
          quiz: [
            {
              question: 'What is the primary purpose of FASTQ files in genomic data?',
              options: [
                'To store aligned sequence data',
                'To store raw sequence data and quality scores',
                'To describe genetic variants',
                'To store functional annotations'
              ],
              correctAnswer: 'To store raw sequence data and quality scores'
            },
            {
              question: 'Which file format is commonly used for storing variant information?',
              options: [
                'FASTQ',
                'BAM',
                'VCF',
                'BED'
              ],
              correctAnswer: 'VCF'
            }
          ]
        },
        {
          id: '1.2',
          title: 'Sequencing Technologies',
          content: `
            <div class="prose lg:prose-xl">
              <h2>Modern Sequencing Technologies</h2>
              <p>
                Next-generation sequencing (NGS) technologies have revolutionized genomic research
                by enabling high-throughput DNA sequencing at unprecedented speeds and reduced costs.
              </p>
              
              <h3>Common Platforms:</h3>
              <ul>
                <li>Illumina Sequencing</li>
                <li>Oxford Nanopore</li>
                <li>PacBio</li>
                <li>Ion Torrent</li>
              </ul>
            </div>
          `,
          imageUrl: 'assets/images/sequencing-tech.png',
          quiz: [
            {
              question: 'Which technology is known for producing long reads?',
              options: [
                'Illumina',
                'Ion Torrent',
                'Oxford Nanopore',
                'Sanger Sequencing'
              ],
              correctAnswer: 'Oxford Nanopore'
            }
          ]
        }
      ],
      codingExercises: [
        {
          title: 'Parse FASTQ Files',
          description: 'Create a function to parse and validate FASTQ format files',
          starterCode: 
`def parse_fastq(file_path):
    """
    Parse a FASTQ file and return the sequences and quality scores
    
    Args:
        file_path (str): Path to the FASTQ file
        
    Returns:
        list: List of tuples containing (header, sequence, quality)
    """
    # Your code here
    pass`,
          solution:
`def parse_fastq(file_path):
    """
    Parse a FASTQ file and return the sequences and quality scores
    
    Args:
        file_path (str): Path to the FASTQ file
        
    Returns:
        list: List of tuples containing (header, sequence, quality)
    """
    records = []
    with open(file_path, 'r') as f:
        while True:
            header = f.readline().strip()
            if not header:
                break
            sequence = f.readline().strip()
            f.readline()  # Skip + line
            quality = f.readline().strip()
            records.append((header, sequence, quality))
    return records`
        }
      ]
    },
    // Add more chapters here...
  ];

  constructor() { }

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