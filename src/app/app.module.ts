import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

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

import {EventListComponent } from 'src/app/pages/event-list/event-list.component';
import {FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // plugin
import interactionPlugin from '@fullcalendar/interaction';
import {HttpClientModule} from '@angular/common/http';
import {EventServiceService} from 'src/app/event-service.service';
import { EventUpdateComponent } from './pages/event-update/event-update.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';



FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

import { UserComponent } from './pages/user/user.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminProfileComponent } from './pages/admin-profile/admin-profile.component';
import {HttpClientModule} from '@angular/common/http';
import { UploadProjectsComponent } from './pages/upload-projects/upload-projects.component';
import { EditUsersComponent } from './pages/edit-users/edit-users.component';
import { AdminBlogComponent } from './pages/admin-blog/admin-blog.component';
import { AdminEventComponent } from './pages/admin-event/admin-event.component';
import { AdmimNavbarComponent } from './pages/admim-navbar/admim-navbar.component';
//import


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

    EventListComponent,
    EventUpdateComponent
    

    UserComponent,
    AdminComponent,
    AdminProfileComponent,
    UploadProjectsComponent,
    EditUsersComponent,
    AdminBlogComponent,
    AdminEventComponent,
    AdmimNavbarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FullCalendarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EventServiceService

    FormsModule,
    HttpClientModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
