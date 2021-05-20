import { Component, OnInit } from '@angular/core';
import { ProjectDataService } from 'src/app/Services/project-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  publicprojects:any;
  privateprojects:any;

  constructor(private dataService:ProjectDataService) { }


  ngOnInit(): void {
    this.getPublicProjectsData();
    this.getPrivateProjectsData();
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

}
