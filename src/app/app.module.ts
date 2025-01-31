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
import { TeamMemberCreateComponent } from './team-member/team-member-create/team-member-create.component';
import { EditServiceComponent } from './services/edit-service/edit-service.component';
import { NewsComponent } from './news/news.component';
import { CategoriesComponent } from './categories/categories.component';
import { CommentairComponent } from './commentair/commentair.component';
import { SliderComponent } from './slider/slider.component';
import { PaymentComponent } from './payment/payment.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { CollabComponent } from './collab/collab.component';
import { SubscriberComponent } from './subscriber/subscriber.component';
import { EmailToSubscriberComponent } from './email-to-subscriber/email-to-subscriber.component';
import { FaviconComponent } from './setting/favicon/favicon.component';
import { GeneralContentComponent } from './setting/general-content/general-content.component';
import { SittingsEmailComponent } from './setting/sittings-email/sittings-email.component';
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
    TeamMemberEditComponent,
    TeamMemberCreateComponent,
    EditServiceComponent,
    NewsComponent,
    CategoriesComponent,
    CommentairComponent,
    SliderComponent,
    PaymentComponent,
    TestimonialsComponent,
    CollabComponent,
    SubscriberComponent,
    EmailToSubscriberComponent,
    FaviconComponent,
    GeneralContentComponent,
    SittingsEmailComponent
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
