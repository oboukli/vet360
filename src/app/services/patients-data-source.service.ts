import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { Patient } from '../models/patient';
import { PatientRepositoryService } from './patient-repository.service';

export class PatientsDataSource implements DataSource<Patient> {
  private patientsSubject = new BehaviorSubject<Patient[]>([]);

  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  constructor(private patientsService: PatientRepositoryService) {}

  public loadPatientsByClient(clientId: number): void {
    this.loadingSubject.next(true);

    this.patientsService
      .getAllPatientsByClient(clientId)
      .pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe(patients => this.patientsSubject.next(patients));
  }

  public connect(collectionViewer: CollectionViewer): Observable<Patient[]> {
    return this.patientsSubject.asObservable();
  }

  public disconnect(collectionViewer: CollectionViewer): void {
    this.patientsSubject.complete();
    this.loadingSubject.complete();
  }
}
