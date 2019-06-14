import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  NbThemeModule,
  NbLayoutModule,
  NbRouteTabsetModule,
  NbCardModule,
  NbDialogModule,
  NbTabsetModule,
  NbSpinnerModule
} from "@nebular/theme";
import { SeedHomeComponent } from "./seed-home/seed-home.component";
import { SeedActivityComponent } from "./seed-activity/seed-activity.component";
import { SeedApplicationComponent } from "./seed-application/seed-application.component";
import { LoginComponent } from "./login/login.component";
import { NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";
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
    NbThemeModule.forRoot({ name: "cosmic" }),
    NbLayoutModule,
    NbRouteTabsetModule,
    NbCardModule,
    NbTabsetModule,
    NbDialogModule.forRoot(),
    FormsModule,
    HttpClientModule,
    NbSpinnerModule,
    NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
