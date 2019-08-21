import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientRepository } from '../../services/client-repository.service';
import { ClientsDataSource } from '../../services/clients-data-source.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent implements OnInit {
  public displayedColumns = ['fullName', 'city', 'startDate'];

  public dataSource: ClientsDataSource;

  constructor(
    private router: Router,
    private clientRepository: ClientRepository
  ) {}

  public ngOnInit(): void {
    this.dataSource = new ClientsDataSource(this.clientRepository);

    // Basic API doesn't support pagination and sorting.
    this.dataSource.loadClients();
  }

  public selectClient(id: number): void {
    this.router.navigate(['/client', id]);
  }
}
