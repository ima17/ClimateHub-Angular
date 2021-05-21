import { Component, OnInit } from '@angular/core';
import { ProjectDataService } from 'src/app/Services/project-data.service';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  publicprojects:any;
  privateprojects:any;
  public loggedIn :boolean;
  
  

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
    this.router.navigateByUrl('/projects');
}


}
