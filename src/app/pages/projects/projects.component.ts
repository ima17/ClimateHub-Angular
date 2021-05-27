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
  privateprojects:any=[];
  public loggedIn :boolean;
  public searchFilter: any = '';
  filteredProjects;
  filterdprivateProjects=this.privateprojects=[];
  public filter = { Passive: false, Active: false,ALL:true,Tropical:false,Arabia:false,Culture:false,Bamboo:false };
  
  pro:any;
  
  


  constructor(
    private dataService:ProjectDataService,
    private Auth: AuthService,
    private router: Router,
    private Token: TokenService,
    
    ) { }

  

  ngOnInit(): void {
    this.getPublicProjectsData();
    this.getPrivateProjectsData();
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
    this.dataService.changeParam(this.pro);
    this.filteredProjects=[]=this.publicprojects;
    
  }

 send(pro){
    this.pro=pro;
 }

  filterChange(option) {
    this.filteredProjects = this.publicprojects.filter(x =>
      (x.category === 'project' && this.filter.ALL) 
       ||(x.energy_strategy === 'Active' && this.filter.Active)
       || (x.energy_strategy === 'Passive' && this.filter.Passive)
       || (x.climate_zone === 'Tropical' && this.filter.Tropical)
       || (x.world_region === 'Arabia' && this.filter.Arabia)
       || (x.parameter === 'Culture' && this.filter.Culture)
       || (x.material === 'Bamboo' && this.filter.Bamboo)
   
    
    );
  
     this.filterdprivateProjects=this.privateprojects.filter(x => 
      (x.category === 'project' && this.filter.ALL)
      ||(x.energy_strategy === 'Active' && this.filter.Active)
      || (x.energy_strategy === 'Passive' && this.filter.Passive)
   
   );

 
  
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
