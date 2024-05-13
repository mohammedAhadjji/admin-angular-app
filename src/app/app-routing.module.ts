import { TravllerComponent } from './travller/travller.component';
import { SettingComponent } from './setting/setting.component';
import { DestinationComponent } from './destination/destination.component';
import { PageComponent } from './page/page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { OfferComponent } from './offer/offer.component';
import { TeamMemberComponent } from './team-member/team-member.component';

const routes: Routes = [
  {path:'',component: ClientComponent},
  {path:'travllers',component: TravllerComponent},
  {path:'sittings',component: SettingComponent},
  {path:'pages',component: PageComponent},
  {path:'destinations',component: DestinationComponent},
  {path:'package',component: OfferComponent},
  {path:'TeamMembers',component: TeamMemberComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
