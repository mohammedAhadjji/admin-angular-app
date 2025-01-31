import { TravllerComponent } from './travller/travller.component';
import { SettingComponent } from './setting/setting.component';
import { DestinationComponent } from './destination/destination.component';
import { PageComponent } from './page/page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { OfferComponent } from './offer/offer.component';
import { TeamMemberComponent } from './team-member/team-member.component';
import { ServicesComponent } from './services/services.component';
import { TeamMemberEditComponent } from './team-member/team-member-edit/team-member-edit.component';
import { TeamMemberCreateComponent } from './team-member/team-member-create/team-member-create.component';
import { NewServiceComponent } from './services/new-service/new-service.component';
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


const routes: Routes = [
  {path:'',component: ClientComponent},
  {path:'travllers',component: TravllerComponent},
  {path:'sittings',component: SettingComponent},
  {path:'pages',component: PageComponent},
  {path:'destinations',component: DestinationComponent},
  {path:'package',component: OfferComponent},
  {path:'TeamMembers',component: TeamMemberComponent},
  {path:'services',component: ServicesComponent},
  {path: 'teamMember_edit/:id', component: TeamMemberEditComponent },
  {path: 'TeamMembers_new', component: TeamMemberCreateComponent },
  {path: 'new-service', component: NewServiceComponent},
  {path: 'edit-service', component: EditServiceComponent},
  {path: 'news', component: NewsComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'commentair', component: CommentairComponent},
  {path: 'slider', component: SliderComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'testimonial', component: TestimonialsComponent},
  {path: 'collaborators', component: CollabComponent},
  {path: 'Subscriber', component: SubscriberComponent},
  {path: 'email_to_Subscriber', component: EmailToSubscriberComponent},
  {path: 'favicon', component: FaviconComponent},
  {path: 'general_content', component: GeneralContentComponent},
  {path: 'sittings_email', component: SittingsEmailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
