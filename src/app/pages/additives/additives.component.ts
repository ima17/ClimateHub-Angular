import { Component, OnInit } from '@angular/core';
import { ProjectDataService } from 'src/app/Services/project-data.service';

@Component({
  selector: 'app-additives',
  templateUrl: './additives.component.html',
  styleUrls: ['./additives.component.scss']
})
export class AdditivesComponent implements OnInit {

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
