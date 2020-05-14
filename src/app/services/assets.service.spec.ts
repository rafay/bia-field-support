import {TestBed} from '@angular/core/testing';

import {AssetsService} from './assets.service';
import {HttpClient} from '@angular/common/http';

describe('AssetsService', () => {
  let service: AssetsService;
  let mockHttpService;

  beforeEach(() => {
    mockHttpService = jasmine.createSpyObj(['get']);
    TestBed.configureTestingModule({
      providers: [
        {provide: HttpClient, useValue: mockHttpService}
      ]
    });
    service = TestBed.inject(AssetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
