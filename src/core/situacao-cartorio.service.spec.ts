import { TestBed } from '@angular/core/testing';

import { SituacaoCartorioService } from './situacao-cartorio.service';

describe('SituacaoCartorioService', () => {
  let service: SituacaoCartorioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SituacaoCartorioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
