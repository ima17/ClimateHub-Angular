import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ToolboxComponent } from './pages/toolbox/toolbox.component';
import { AdditivesComponent } from './pages/additives/additives.component';
import { NetworkComponent } from './pages/network/network.component';
import { EditorialComponent } from './pages/editorial/editorial.component';
import { JoinUSComponent } from './pages/join-us/join-us.component';
import { ELearningComponent } from './pages/e-learning/e-learning.component';
import { BlogComponent } from './pages/blog/blog.component';
import { EventsComponent } from './pages/events/events.component';
import { GeographyComponent } from './pages/home/juggling-container-links/geography/geography.component';
import { TopographyComponent } from './pages/home/juggling-container-links/topography/topography.component';
import { EcologyComponent } from './pages/home/juggling-container-links/ecology/ecology.component';
import { TechnologyComponent } from './pages/home/juggling-container-links/technology/technology.component';
import { VolumeComponent } from './pages/home/juggling-container-links/volume/volume.component';
import { EnergyComponent } from './pages/home/juggling-container-links/energy/energy.component';
import { EnvelopeComponent } from './pages/home/juggling-container-links/envelope/envelope.component';
import { ZoningComponent } from './pages/home/juggling-container-links/zoning/zoning.component';
import { MaterialComponent } from './pages/home/juggling-container-links/material/material.component';
import { VentilationComponent } from './pages/home/juggling-container-links/ventilation/ventilation.component';
import { DetailsComponent } from './pages/details/details.component';

import { AdminProfileComponent } from './pages/admin-profile/admin-profile.component';
import { AdminBlogComponent } from './pages/admin-blog/admin-blog.component';
import { AdminEventComponent } from './pages/admin-event/admin-event.component';
import { EditUsersComponent } from './pages/edit-users/edit-users.component';
import { EditProjectsComponent } from './Projects/edit-projects/edit-projects.component';
import { UploadProjectsComponent } from './Projects/upload-projects/upload-projects.component';
import { ImprintComponent } from './components/footer/imprint/imprint.component';
import { PrivacyPolicyComponent } from './components/footer/privacy-policy/privacy-policy.component';

import { EventPollComponent} from 'src/app/event-Components/event-poll/event-poll.component';
import { EventVoteComponent } from 'src/app/event-Components/event-vote/event-vote.component';
import { EventAddComponent } from 'src/app/event-Components/event-add/event-add.component';
import { EventEditComponent} from 'src/app/event-Components/event-edit/event-edit.component';
import { EventMailComponent } from 'src/app/event-Components/event-mail/event-mail.component';
import {EventListComponent} from 'src/app/event-Components/event-list/event-list.component';


import { AfterLoginService } from './services/after-login.service';
import { BeforeLoginService } from './services/before-login.service';
import { LoginComponent } from './pages/login/login.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';


const routes: Routes = [
  {path:'',component:HomeComponent,data: { breadcrumb: 'Home'}},
  {path:'Projects',component:ProjectsComponent,data: { breadcrumb: 'Projects'}},
  {path:'Additives',component:AdditivesComponent,data: { breadcrumb: 'Additives'}},
  {path:'Editorial',component:EditorialComponent,data: { breadcrumb: 'Editorial'}},
  {path:'Network',component:NetworkComponent,data: { breadcrumb: 'Network'}},
  {path:'Toolbox',component:ToolboxComponent,data: { breadcrumb: 'Toolbox'}},
  {path:'Blog',component:BlogComponent,data: { breadcrumb: 'Blog'}},
  {path:'Events',component:EventsComponent,data: { breadcrumb: 'Events'}},
  {path:'JoinUs',component:JoinUSComponent,data: { breadcrumb: 'JoinUs'}},
  {path:'ELearning',component:ELearningComponent,data: { breadcrumb: 'ELearning'}},
  {path:'geography',component:GeographyComponent,data: { breadcrumb: 'Geography'}},
  {path:'topography',component: TopographyComponent,data: { breadcrumb: 'Topography'}},
  {path:'ecology',component:EcologyComponent,data: { breadcrumb: 'Ecology'}},
  {path:'technology',component:TechnologyComponent,data: { breadcrumb: 'Technology'}},
  {path:'volume',component:VolumeComponent,data: { breadcrumb: 'Volume'}},
  {path:'energy',component:EnergyComponent,data: { breadcrumb: 'Energy'}},
  {path:'material',component:MaterialComponent,data: { breadcrumb: 'Material'}},
  {path:'ventilation',component:VentilationComponent,data: { breadcrumb: 'Ventilation'}},
  {path:'envelope',component:EnvelopeComponent,data: { breadcrumb: 'Envelope'}},
  {path:'zoning',component:ZoningComponent,data: { breadcrumb: 'Zoning'}},
  {path:'details',component:DetailsComponent,data: { breadcrumb: 'Details'}},
  
  {path:'admin',component:AdminNavComponent,canActivate: [AfterLoginService]},
  {path:'admin-profile',component:AdminProfileComponent,canActivate: [AfterLoginService]},
  {path:'admin-blog',component:AdminBlogComponent,canActivate: [AfterLoginService]},
  {path:'admin-event',component:AdminEventComponent,canActivate: [AfterLoginService]},
  {path:'edit-users',component:EditUsersComponent,canActivate: [AfterLoginService]},
  //{path:'upload-projects',component:UploadProjectsComponent,canActivate: [AfterLoginService]},
  {path:'upload-projects',component:UploadProjectsComponent},
  {path:'edit-projects',component:EditProjectsComponent,canActivate: [AfterLoginService]},
  {path:'login',component:LoginComponent},
  {path:'imprint',component:ImprintComponent},
  {path:'privacy-policy',component:PrivacyPolicyComponent},

  {path:'event-vote',component:EventVoteComponent},
  {path:'event-vote/event-poll/:id',component:EventPollComponent},
  {path:'event-add',component:EventAddComponent},
  {path:'event-list/event-edit/:id',component:EventEditComponent},
  {path: 'event-list',component:EventListComponent},
  
  {path: 'request-password',component:RequestResetComponent},
  {path: 'response-password',component:ResponseResetComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

