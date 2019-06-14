import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeedHomeComponent } from './seed-home/seed-home.component';
import { SeedActivityComponent } from './seed-activity/seed-activity.component';
import { SeedApplicationComponent } from './seed-application/seed-application.component';
import { LoginComponent } from './login/login.component'
import { AuthGuardService } from './auth-guard.service'

const routes: Routes = [{component:SeedHomeComponent,path:'home',canActivate:[AuthGuardService]},
{component:SeedActivityComponent,path:'activity', canActivate:[AuthGuardService]},
{component:SeedApplicationComponent,path:'launch',canActivate:[AuthGuardService]},
{component:LoginComponent,path:'login'},
{ path: '',
redirectTo: '/home',
pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
