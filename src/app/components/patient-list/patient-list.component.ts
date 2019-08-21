import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { PatientRepositoryService } from '../../services/patient-repository.service';
import { PatientsDataSource } from '../../services/patients-data-source.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatientListComponent implements OnInit, OnChanges {
  @Input()
  public clientId: number;

  public displayedColumns = ['name', 'class', 'species', 'dateOfBirth'];

  public dataSource: PatientsDataSource;

  constructor(private patientRepository: PatientRepositoryService) {}

  public ngOnInit(): void {
    this.dataSource = new PatientsDataSource(this.patientRepository);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (typeof changes.clientId !== 'undefined') {
      if (!changes.clientId.isFirstChange() && this.clientId) {
        this.dataSource.loadPatientsByClient(this.clientId);
      }
    }
  }
}
