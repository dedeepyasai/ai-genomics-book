import { TestBed } from '@angular/core/testing';

import { ChapterExistsGuard } from './chapter-exists.guard';

describe('ChapterExistsGuard', () => {
  let guard: ChapterExistsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChapterExistsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
