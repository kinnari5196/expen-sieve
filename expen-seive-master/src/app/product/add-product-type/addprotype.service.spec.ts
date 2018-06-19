import { TestBed, inject } from '@angular/core/testing';

import { AddprotypeService } from './addprotype.service';

describe('AddprotypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddprotypeService]
    });
  });

  it('should be created', inject([AddprotypeService], (service: AddprotypeService) => {
    expect(service).toBeTruthy();
  }));
});
