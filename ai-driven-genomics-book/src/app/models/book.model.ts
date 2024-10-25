export interface Quiz {
    question: string;
    options: string[];
    correctAnswer: string;
  }
  
  export interface CodingExercise {
    title: string;
    description: string;
    starterCode: string;
    solution: string;
  }
  
  export interface SubChapter {
    id: string;
    title: string;
    content: string;
    imageUrl?: string;
    quiz: Quiz[];
  }
  
  export interface Chapter {
    id: number;
    title: string;
    description: string;
    subChapters: SubChapter[];
    codingExercises: CodingExercise[];
  }