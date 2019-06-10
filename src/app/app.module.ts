import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule,NbRouteTabsetModule,NbCardModule,NbIconModule,NbDialogModule,NbTabsetModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { SeedHomeComponent } from './seed-home/seed-home.component';
import { SeedActivityComponent } from './seed-activity/seed-activity.component';
import { SeedApplicationComponent } from './seed-application/seed-application.component';
import { LoginComponent } from './login/login.component';
import { GaugeModule } from 'angular-gauge';

@NgModule({
  declarations: [
    AppComponent,
    SeedHomeComponent,
    SeedActivityComponent,
    SeedApplicationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbRouteTabsetModule,
    NbCardModule,
    NbIconModule,
    NbTabsetModule,
    NbDialogModule.forRoot(),
    FormsModule,
    HttpClientModule,
    GaugeModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
