import { Component, OnInit } from '@angular/core';
import {
  MapsAPILoader
} from '@agm/core';
import { ProjectDataService } from 'src/app/Services/project-data.service';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss']
})
export class MapContainerComponent implements OnInit {
  publicprojects:any;
  privateprojects:any;
  zoom=1;
  previous;
  public loggedIn :boolean;
 
  
  clickedMarker(infowindow) {
    if (this.previous) {
        this.previous.close();
    }
    this.previous = infowindow;
 }

  constructor(
    private dataService:ProjectDataService,
    private Auth: AuthService,
    private router: Router,
    private Token: TokenService
    ) { }

  ngOnInit(): void {
    this.getPublicProjectsData();
    this.getPrivateProjectsData();
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
  }

  getPublicProjectsData(){
    this.dataService.getPublicProjectData().subscribe(res =>{
      this.publicprojects=res;
    });
  };

  getPrivateProjectsData(){
    this.dataService.getPrivateProjectData().subscribe(res =>{
      this.privateprojects=res;
    });
  };

  logout(event: MouseEvent){
    event.preventDefault();
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('#');
}
  

}
