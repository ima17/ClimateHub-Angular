import { ProjectService } from 'src/app/Services/project.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects:any;

  constructor(private projectService:ProjectService) { }

  ngOnInit(): void {
    this.getProjectsData();
  }

  getProjectsData(){
    this.projectService.getData().subscribe(res =>{
      this.projects = res;
    });
  }

  deleteProject(id){
    //console.log(id);
    this.projectService.deleteProject(id).subscribe(res=>{
      this.getProjectsData();
    })
  }

}
