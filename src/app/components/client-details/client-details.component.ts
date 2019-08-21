import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Client } from '../../models';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss'],

  // For better performance.
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientDetailsComponent implements OnInit {
  @Input()
  public client: Client;

  constructor() {}

  public ngOnInit(): void {}
}
