import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientComponent } from './containers/client/client.component';
import { ClientResolver } from './services/client-resolver';

const routes: Routes = [
  {
    path: '',
    component: ClientListComponent,
  },
  {
    path: 'client/:id',
    component: ClientComponent,
    resolve: {
      client: ClientResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
