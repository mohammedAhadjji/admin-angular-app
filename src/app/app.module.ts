import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    TravllerComponent,
    SettingComponent,
    PageComponent,
    DestinationComponent,
    OfferComponent,
    TeamMemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatExpansionModule,
    BrowserAnimationsModule 
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
