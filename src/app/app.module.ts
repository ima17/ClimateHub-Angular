
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';
//import { MDBBootstrapModule } from 'angular-bootstrap-md'; 
import { HttpClientModule } from '@angular/common/http';


//import { FormBuilder } from '@angular/forms';
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
//import { AdminComponent } from 'src/app/pages/admin/admin.component';
import { AdminProfileComponent } from './pages/admin-profile/admin-profile.component';
import { EditUsersComponent } from './pages/edit-users/edit-users.component';
import { AdminBlogComponent } from './pages/admin-blog/admin-blog.component';
import { AdminEventComponent } from './pages/admin-event/admin-event.component';
import { AdmimNavbarComponent } from './pages/admim-navbar/admim-navbar.component';
import { ImprintComponent } from './components/footer/imprint/imprint.component';
import { PrivacyPolicyComponent } from './components/footer/privacy-policy/privacy-policy.component';


//import { AfterLoginService } from './services/after-login.service';
//import { BeforeLoginService } from './services/before-login.service'; 

import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
//import { FullCalendarModule } from '@fullcalendar/angular'; // calendar
//import  dayGridPlugin from '@fullcalendar/daygrid'; // plugin
import interactionPlugin from '@fullcalendar/interaction';
import { EventPollComponent } from './event-Components/event-poll/event-poll.component';
import { EventAddComponent } from './event-Components/event-add/event-add.component';
import { EventEditComponent } from './event-Components/event-edit/event-edit.component';
import { EventListComponent } from './event-Components/event-list/event-list.component';
import { JarwisService } from './services/jarwis.service';
import { TokenService } from './services/token.service';
import { AuthService } from './services/auth.service';
import { AfterLoginService } from './services/after-login.service';
import { BeforeLoginService } from './services/before-login.service';
import { LoginComponent } from './pages/login/login.component';

import { EditProjectsComponent } from './Projects/edit-projects/edit-projects.component';
import { ProjectListComponent } from './Projects/project-list/project-list.component';
import { UploadProjectsComponent } from './Projects/upload-projects/upload-projects.component';

import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { MapContainerComponent } from './components/map-container/map-container.component';
import { UserEditingComponent } from './pages/user-editing/user-editing.component';
import { UpdateUsersComponent } from './pages/update-users/update-users.component';
import {BreadcrumbModule} from 'angular-crumbs';
import { NgxPaginationModule} from 'ngx-pagination';
import { DetailsComponent } from './pages/details/details.component';

import { AdminLoginComponent } from './pages/admin-login/admin-login.component';

import { VoteResultComponent } from './event-Components/vote-result/vote-result.component';
import * as $ from 'jquery';
import { UserListComponent } from 'src/app/event-Components/user-list/user-list.component';
import { FilterPipe } from './pipes/filter.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';

import {MatCardModule} from '@angular/material/card';
import { DetailsMapContainerComponent } from './pages/details/details-map-container/details-map-container.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';




// FullCalendarModule.registerPlugins([ // register FullCalendar plugins
//   dayGridPlugin,interactionPlugin
  
//]);

// ]);



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
    //AdminComponent,
    AdminProfileComponent,
    EditUsersComponent,
    AdminBlogComponent,
    AdminEventComponent,
    AdmimNavbarComponent,
    LoginComponent,
    ImprintComponent,
    PrivacyPolicyComponent,
    AdminNavComponent,
    EventPollComponent,
    EventAddComponent,
    EventEditComponent,
    EventListComponent,
    EditProjectsComponent,
    ProjectListComponent,
    UploadProjectsComponent,
    MapContainerComponent,
    RequestResetComponent,
    ResponseResetComponent,
    UserEditingComponent,
    UpdateUsersComponent,
    DetailsComponent,
    AdminLoginComponent,


    VoteResultComponent,
    UserListComponent,
    FilterPipe,
    TruncatePipe,
    DetailsMapContainerComponent,
    SearchFilterPipe

    
    

  ],
  
  imports:[
    BrowserModule,
    AppRoutingModule,
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
    //FullCalendarModule,
    BreadcrumbModule,
    SnotifyModule,
    MatCardModule,
    MatCheckboxModule,
    MatExpansionModule,
    NgxPaginationModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB_k9WCecdc-7-yKirN0X01WpqN67RdB68'
    }),
    // MDBBootstrapModule.forRoot(),
    // //FormBuilder

  ],

  providers: [JarwisService, TokenService, AuthService, AfterLoginService, BeforeLoginService,{ provide: 'SnotifyToastConfig', useValue: ToastDefaults},
  SnotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
