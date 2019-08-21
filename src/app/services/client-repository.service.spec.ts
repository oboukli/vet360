import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ClientRepository } from './client-repository.service';

describe('ClientRepositoryService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
  );

  it('should be created', () => {
    const service: ClientRepository = TestBed.get(ClientRepository);
    expect(service).toBeTruthy();
  });
});
