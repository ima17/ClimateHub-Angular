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

import {EventListComponent } from 'src/app/pages/event-list/event-list.component';
import { EventUpdateComponent} from 'src/app/pages/event-update/event-update.component';
import { EventAddComponent } from 'src/app/pages/event-add/event-add.component';
import {EventPollComponent } from 'src/app/pages/event-poll/event-poll.component';
import {EventVoteComponent } from 'src/app/pages/event-vote/event-vote.component';

import { AdminComponent } from './pages/admin/admin.component';
import { AdminProfileComponent } from './pages/admin-profile/admin-profile.component';
import { AdminBlogComponent } from './pages/admin-blog/admin-blog.component';
import { AdminEventComponent } from './pages/admin-event/admin-event.component';
import { EditUsersComponent } from './pages/edit-users/edit-users.component';
import { UploadProjectsComponent } from './pages/upload-projects/upload-projects.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Projects',component:ProjectsComponent},
  {path:'Additives',component:AdditivesComponent},
  {path:'Editorial',component:EditorialComponent},
  {path:'Network',component:NetworkComponent},
  {path:'Toolbox',component:ToolboxComponent},
  {path:'Blog',component:BlogComponent},
  {path:'Events',component:EventsComponent},
  {path:'JoinUs',component:JoinUSComponent},
  {path:'ELearning',component:ELearningComponent},

  {path:'Events-List-view',component:EventListComponent},
  {path :'Events-List-view/Events-Update/:id',component:EventUpdateComponent},
  {path: 'Event-Add', component:EventAddComponent},
  {path: 'Event-Vote/Event-Poll/:id',component:EventPollComponent},
  {path: 'Event-Vote', component:EventVoteComponent},

  {path:'admin',component:AdminComponent},
  {path:'admin-profile',component:AdminProfileComponent},
  {path:'admin-blog',component:AdminBlogComponent},
  {path:'admin-event',component:AdminEventComponent},
  {path:'edit-users',component:EditUsersComponent},
  {path:'upload-projects',component:UploadProjectsComponent},


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
