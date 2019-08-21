import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  MatIconModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { ClientComponent } from './containers/client/client.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ClientListComponent,
    ClientDetailsComponent,
    PatientListComponent,
    PatientDetailsComponent,
    InvoiceListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatIconModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
