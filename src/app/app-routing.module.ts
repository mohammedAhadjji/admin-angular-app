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

const routes: Routes = [
  {path:'',component: ClientComponent},
  {path:'travllers',component: TravllerComponent},
  {path:'sittings',component: SettingComponent},
  {path:'pages',component: PageComponent},
  {path:'destinations',component: DestinationComponent},
  {path:'package',component: OfferComponent},
  {path:'TeamMembers',component: TeamMemberComponent},
  {path:'services',component: ServicesComponent},
  { path: 'teamMember_edit/:id', component: TeamMemberEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
