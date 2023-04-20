import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';

import { EditOrganizationComponent } from './components/edit-organization/edit-organization.component';
import { OrganizationComponent } from './components/organization/organization.component';

import { UserComponent } from './components/user/user.component';
import { ActComponent } from './components/act/act.component';
import { AddActComponent } from './components/act-post/act-post.component';
import { ActEditComponent } from './components/act-edit/act-edit.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddOrganizationComponent } from './components/add-organization/add-organization.component';
import { AuthGuard } from './services/auth-guard.service';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { AddNotificationComponent } from './components/add-notification/add-notification.component';
import { NotsUserComponent } from './components/nots-user/nots-user.component';
import { EditNotComponent } from './components/edit-not/edit-not.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path: 'users',
    component: UserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user',
    component: AddUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-user/:id',
    component: EditUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'acts',
    component: ActComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'act-edit/:id',
    component: ActEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'act',
    component: AddActComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'organizations',
    component: OrganizationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'organization',
    component: AddOrganizationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-organization/:id',
    component: EditOrganizationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'notifications',
    component: NotificationsComponent,
  },
  {
    path: 'add-notification',
    component: AddNotificationComponent,
  },
  {
    path: 'nots-user/:id',
    component: NotsUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-not/:id',
    component:EditNotComponent,
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
