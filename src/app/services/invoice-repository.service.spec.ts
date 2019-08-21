import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { InvoiceRepositoryService } from './invoice-repository.service';

describe('InvoiceRepositoryService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
  );

  it('should be created', () => {
    const service: InvoiceRepositoryService = TestBed.get(
      InvoiceRepositoryService
    );
    expect(service).toBeTruthy();
  });
});
