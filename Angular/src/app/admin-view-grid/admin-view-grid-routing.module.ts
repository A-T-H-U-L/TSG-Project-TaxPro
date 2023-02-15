import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { Shell } from '@app/shell/shell.service';
import { AuthenticationGuard } from '@app/auth';
import { AdminViewGridComponent } from './admin-view-grid.component';
import { RoleGuard } from '@app/auth/roleGuard';

const routes: Routes = [
  {
    path: 'adminView',
    component: AdminViewGridComponent,
    data: { title: marker('AdminView') },
     canActivate: [RoleGuard.forRoles(2),AuthenticationGuard] ,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AdminViewGridRoutingModule {}
