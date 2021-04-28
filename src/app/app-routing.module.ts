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
import { UploadProjectsComponent } from './pages/upload-projects/upload-projects.component';
import { ImprintComponent} from './components/footer/imprint/imprint.component';
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
import { UserEditingComponent } from './pages/user-editing/user-editing.component';
import { UpdateUsersComponent } from './pages/update-users/update-users.component';


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
  {path:'admin',component:AdminNavComponent},
  {path:'admin-profile',component:AdminProfileComponent},
  {path:'admin-blog',component:AdminBlogComponent},
  {path:'admin-event',component:AdminEventComponent},
  {path:'edit-users',component:EditUsersComponent},
  {path:'upload-projects',component:UploadProjectsComponent},
  {path:'',component:HomeComponent},
  {path:'Projects',component:ProjectsComponent},
  {path:'Additives',component:AdditivesComponent},
  {path:'Editorial',component:EditorialComponent}, 
  {path:'Network',component:NetworkComponent},
  {path:'Toolbox',component:ToolboxComponent},
  {path:'Blog',component:BlogComponent},
  {path:'Events',component:EventsComponent},
  {path:'JoinUs',component:JoinUSComponent},
  {path:'ELearning',component:ELearningComponent,canActivate: [AfterLoginService]},
  {path:'geography',component:GeographyComponent},
  {path:'topography',component: TopographyComponent},
  {path:'ecology',component:EcologyComponent},
  {path:'technology',component:TechnologyComponent},
  {path:'volume',component:VolumeComponent},
  {path:'energy',component:EnergyComponent},
  {path:'material',component:MaterialComponent},
  {path:'ventilation',component:VentilationComponent},
  {path:'envelope',component:EnvelopeComponent},
  {path:'zoning',component:ZoningComponent},
  {path:'admin',component:AdminNavComponent,canActivate: [AfterLoginService]},
  {path:'admin-profile',component:AdminProfileComponent,canActivate: [AfterLoginService]},
  {path:'admin-blog',component:AdminBlogComponent,canActivate: [AfterLoginService]},
  {path:'admin-event',component:AdminEventComponent,canActivate: [AfterLoginService]},
  {path:'add-users',component:EditUsersComponent,canActivate: [AfterLoginService]},
  {path:'upload-projects',component:UploadProjectsComponent,canActivate: [AfterLoginService]},
  {path:'login',component:LoginComponent},
  {path:'imprint',component:ImprintComponent},
  {path:'privacy-policy',component:PrivacyPolicyComponent},

  
  {path:'event-vote',component:EventVoteComponent},
  {path:'event-vote/event-poll/:id',component:EventPollComponent},
  {path:'event-add',component:EventAddComponent},
  {path:'event-list/event-edit/:id',component:EventEditComponent},
  {path: 'event-list',component:EventListComponent},
  {path: 'login',component:LoginComponent},
  {path: 'request-password',component:RequestResetComponent},
  {path: 'response-password',component:ResponseResetComponent},
  {path: 'user-editing', component:UserEditingComponent,canActivate: [AfterLoginService]},
  {path:'update-user/:id',component:UpdateUsersComponent} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
