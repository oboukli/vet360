import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { config } from '../config';
import { Patient } from '../models';

@Injectable({
  providedIn: 'root',
})
export class PatientRepositoryService {
  constructor(private httpClient: HttpClient) {}

  public getAllPatientsByClient(clientId: number): Observable<Patient[]> {
    return this.httpClient
      .get(`${config.apiUrl}/patients/client/${clientId}`)
      .pipe(map((res: any) => res.patients));
  }
}
