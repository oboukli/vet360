import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Client, Invoice, Patient } from '../../models';
import { ClientRepository } from '../../services/client-repository.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {
  public client$: Observable<Client>;

  public patients$: Observable<Patient[]>;

  public invoices$: Observable<Invoice[]>;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private clientRepository: ClientRepository
  ) {}

  public ngOnInit(): void {
    this.client$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const clientId = +params.get('id');

        return this.clientRepository.getClientById(clientId);
      })
    );
  }

  public navigateBack(): void {
    this.location.back();
  }
}
