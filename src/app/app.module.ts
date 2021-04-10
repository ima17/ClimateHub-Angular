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
    MapImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
