import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { Invoice } from '../models/invoice';
import { InvoiceRepositoryService } from './invoice-repository.service';

export class InvoicesDataSource implements DataSource<Invoice> {
  private invoicesSubject = new BehaviorSubject<Invoice[]>([]);

  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  constructor(private invoicesService: InvoiceRepositoryService) {}

  public loadInvoices(clientId: number): void {
    this.loadingSubject.next(true);

    this.invoicesService
      .getInvoicesByClient(clientId)
      .pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe(invoices => this.invoicesSubject.next(invoices));
  }

  public connect(collectionViewer: CollectionViewer): Observable<Invoice[]> {
    return this.invoicesSubject.asObservable();
  }

  public disconnect(collectionViewer: CollectionViewer): void {
    this.invoicesSubject.complete();
    this.loadingSubject.complete();
  }
}
