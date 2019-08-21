import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { InvoicesDataSource } from '../services/invoice-data-source.service';
import { InvoiceRepositoryService } from '../services/invoice-repository.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvoiceListComponent implements OnInit, OnChanges {
  @Input()
  public clientId: number;

  public displayedColumns = ['number', 'amount', 'vat', 'date'];

  public dataSource: InvoicesDataSource;

  constructor(private invoiceRepository: InvoiceRepositoryService) {}

  public ngOnInit(): void {
    this.dataSource = new InvoicesDataSource(this.invoiceRepository);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (typeof changes.clientId !== 'undefined') {
      if (!changes.clientId.isFirstChange() && this.clientId) {
        this.dataSource.loadInvoices(this.clientId);
      }
    }
  }
}
