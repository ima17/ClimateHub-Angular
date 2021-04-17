import { Component, OnInit } from '@angular/core';
import { ProjectDataService } from 'src/app/Services/project-data.service';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent implements OnInit {

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
