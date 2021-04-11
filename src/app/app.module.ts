import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { FormBuilder } from '@angular/forms';
import { AppComponent } from './app.component';
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
import {FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // plugin
import interactionPlugin from '@fullcalendar/interaction';
import {EventServiceService} from 'src/app/event-service.service';
import { EventUpdateComponent } from './pages/event-update/event-update.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';



FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);


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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { MapImageComponent } from './components/map-image/map-image.component';

import { UserComponent } from './pages/user/user.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminProfileComponent } from './pages/admin-profile/admin-profile.component';
import {HttpClientModule} from '@angular/common/http';
import { UploadProjectsComponent } from './pages/upload-projects/upload-projects.component';
import { EditUsersComponent } from './pages/edit-users/edit-users.component';
import { AdminBlogComponent } from './pages/admin-blog/admin-blog.component';
import { AdminEventComponent } from './pages/admin-event/admin-event.component';
import { AdmimNavbarComponent } from './pages/admim-navbar/admim-navbar.component';
import { EventAddComponent } from './pages/event-add/event-add.component';
import { EventPollComponent } from './pages/event-poll/event-poll.component';
import { EventVoteComponent } from './pages/event-vote/event-vote.component';
import { EventMailComponent } from './pages/event-mail/event-mail.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { FullCalendarModule } from '@fullcalendar/angular'; // calendar
import dayGridPlugin from '@fullcalendar/daygrid'; // plugin
import interactionPlugin from '@fullcalendar/interaction';
import { EventVoteComponent } from './event-Components/event-vote/event-vote.component';
import { EventPollComponent } from './event-Components/event-poll/event-poll.component';
import { EventAddComponent } from './event-Components/event-add/event-add.component';
import { EventEditComponent } from './event-Components/event-edit/event-edit.component';
import { EventMailComponent } from './event-Components/event-mail/event-mail.component';
import { EventListComponent } from './event-Components/event-list/event-list.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);


import { JarwisService } from './services/jarwis.service';
import { TokenService } from './services/token.service';
import { AuthService } from './services/auth.service';
import { AfterLoginService } from './services/after-login.service';
import { BeforeLoginService } from './services/before-login.se



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
    EventUpdateComponent,
    GeographyComponent,
    TopographyComponent,
    EcologyComponent,
    TechnologyComponent,
    VolumeComponent,
    EnergyComponent,
    EnvelopeComponent,
    ZoningComponent,
    MaterialComponent,
    VentilationComponent,
    FooterComponent,
    BreadcrumbComponent,
    MapImageComponent,

    UserComponent,
    AdminComponent,
    AdminProfileComponent,
    UploadProjectsComponent,
    EditUsersComponent,
    AdminBlogComponent,
    AdminEventComponent,
    AdmimNavbarComponent,

    EventAddComponent,
    EventPollComponent,
    EventVoteComponent,
    EventMailComponent

    AdminNavComponent,
    EventVoteComponent,
    EventPollComponent,
    EventAddComponent,
    EventEditComponent,
    EventMailComponent,
    EventListComponent,
    

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
    EventServiceService,

    FormsModule,
    HttpClientModule

  ],

    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FullCalendarModule
  ],
  providers: [JarwisService, TokenService, AuthService, AfterLoginService, BeforeLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
