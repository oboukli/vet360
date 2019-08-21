import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { Client } from '../models/client';
import { ClientRepository } from './client-repository.service';

export class ClientsDataSource implements DataSource<Client> {
  private clientsSubject = new BehaviorSubject<Client[]>([]);

  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  constructor(private clientsService: ClientRepository) {}

  public loadClients(): void {
    this.loadingSubject.next(true);

    this.clientsService
      .getAllClients()
      .pipe(
        map(clients => {
          return clients.map(c => {
            return {
              ...c,
              fullName: `${c.firstName} ${c.lastName}`,
            };
          });
        }),
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe(clients => this.clientsSubject.next(clients));
  }

  public connect(collectionViewer: CollectionViewer): Observable<Client[]> {
    return this.clientsSubject.asObservable();
  }

  public disconnect(collectionViewer: CollectionViewer): void {
    this.clientsSubject.complete();
    this.loadingSubject.complete();
  }
}
