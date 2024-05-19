import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HttpClientModule } from '@angular/common/http';
import { ClientComponent } from './client/client.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatExpansionModule } from '@angular/material/expansion';
import { TravllerComponent } from './travller/travller.component';
import { SettingComponent } from './setting/setting.component';
import { PageComponent } from './page/page.component';
import { DestinationComponent } from './destination/destination.component';
import { OfferComponent } from './offer/offer.component';
import { TeamMemberComponent } from './team-member/team-member.component';
import { ServicesComponent } from './services/services.component';
import { TeamMemberEditComponent } from './team-member/team-member-edit/team-member-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    TravllerComponent,
    SettingComponent,
    PageComponent,
    DestinationComponent,
    OfferComponent,
    TeamMemberComponent,
    ServicesComponent,
    TeamMemberEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatExpansionModule,
    FormsModule ,
    BrowserAnimationsModule 
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
