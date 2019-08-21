import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { config } from '../config';
import { Invoice } from '../models';

@Injectable({
  providedIn: 'root',
})
export class InvoiceRepositoryService {
  constructor(private httpClient: HttpClient) {}

  public getInvoicesByClient(clientId: number): Observable<Invoice[]> {
    return this.httpClient
      .get(`${config.apiUrl}/invoices/client/${clientId}`)
      .pipe(map((res: any) => res.invoices));
  }
}
