import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';


import { Shell } from '@app/shell/shell.service';
import { AuthenticationGuard } from '@app/auth';

import { UserViewComponent } from './user-view.component';
import { RoleGuard } from '@app/auth/roleGuard';


const routes: Routes = [

    { path: 'userView', component: UserViewComponent, data: { title: marker('UserView') }, canActivate: [RoleGuard.forRoles(1),AuthenticationGuard]  },
//   Shell.childRoutes([

     
   
//   ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class UserViewGridRoutingModule {}
