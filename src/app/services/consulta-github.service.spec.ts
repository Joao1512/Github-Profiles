import { TestBed } from '@angular/core/testing';

import { ConsultaGithubService } from './consulta-github.service';

describe('ConsultaGithubService', () => {
  let service: ConsultaGithubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaGithubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
