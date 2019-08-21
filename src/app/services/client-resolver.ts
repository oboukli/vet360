import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from '../models/client';
import { ClientRepository } from './client-repository.service';

@Injectable({
  providedIn: 'root',
})
export class ClientResolver implements Resolve<Client> {
  constructor(private clientRepository: ClientRepository) {}

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Client> {
    return this.clientRepository.getClientById(route.params.id);
  }
}
