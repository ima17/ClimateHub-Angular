import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ToolboxComponent } from './pages/toolbox/toolbox.component';
import { AdditivesComponent } from './pages/additives/additives.component';
import { NetworkComponent } from './pages/network/network.component';
import { EditorialComponent } from './pages/editorial/editorial.component';
import { JoinUSComponent } from './pages/join-us/join-us.component';
import { ELearningComponent } from './pages/e-learning/e-learning.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BlogComponent } from './pages/blog/blog.component';
import { EventsComponent } from './pages/events/events.component';
import { StartdiscussionComponent } from './startdiscussion/startdiscussion.component';
import { AllpostsComponent } from './allposts/allposts.component';

import { RouterModule,Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { PostService }   from './allposts/post.service';
import { StartDiscussionServiceGuardService }   from './startdiscussion/startdiscussion-deactivate.service';
import { DisplaypostsComponent } from './displayposts/displayposts.component';


const appRoutes:Routes=[
  {
    path: 'discussion',
    component: StartdiscussionComponent,
    canDeactivate:[StartDiscussionServiceGuardService]
  },
  {path: 'allposts',component: AllpostsComponent},
  {path: '',redirectTo:'/startdiscussion',pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    ToolboxComponent,
    AdditivesComponent,
    NetworkComponent,
    EditorialComponent,
    JoinUSComponent,
    ELearningComponent,
    NavbarComponent,
    BlogComponent,
    EventsComponent,
    StartdiscussionComponent,
    AllpostsComponent,
    DisplaypostsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostService,
    StartDiscussionServiceGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
