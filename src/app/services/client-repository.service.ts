import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { config } from '../config';
import { Client, Patient } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ClientRepository {
  constructor(private httpClient: HttpClient) {}

  public getClientById(clientId: number): Observable<Client> {
    return this.httpClient
      .get<Client>(`${config.apiUrl}/clients/${clientId}`) // TODO: Param
      .pipe(
        map((res: any) => res.client),
        catchError(err => {
          console.error(err);
          throw new Error('Error loading client.');
        })
      );
  }

  public getAllClients(): Observable<Client[]> {
    return this.httpClient
      .get(`${config.apiUrl}/clients`)
      .pipe(map((res: any) => res.clients));
  }

  public getAllClientPatients(clientId: number): Observable<Patient[]> {
    return this.httpClient
      .get(`${config.apiUrl}/patients`, {
        params: new HttpParams().set('clientId', clientId.toString()),
      })
      .pipe(map(res => res['payload']));
  }

  public getPatients(clientId: number): Observable<Patient[]> {
    return this.httpClient
      .get('/Patients', {
        params: new HttpParams().set('clientId', clientId.toString()),
      })
      .pipe(map(res => res['payload']));
  }
}
