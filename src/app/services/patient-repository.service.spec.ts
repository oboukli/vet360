import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PatientRepositoryService } from './patient-repository.service';

describe('PatientRepositoryService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
  );

  it('should be created', () => {
    const service: PatientRepositoryService = TestBed.get(
      PatientRepositoryService
    );
    expect(service).toBeTruthy();
  });
});
