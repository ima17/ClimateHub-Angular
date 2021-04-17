import { Component, OnInit } from '@angular/core';
import { ProjectDataService } from 'src/app/Services/project-data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects:any;

  constructor(private dataService:ProjectDataService) { }

  ngOnInit(): void {
    this.getProjectsData();
  }

  getProjectsData(){
    this.dataService.getProjectData().subscribe(res =>{
      this.projects=res;
    });
  };

}
