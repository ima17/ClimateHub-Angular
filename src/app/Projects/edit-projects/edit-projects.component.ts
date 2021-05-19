import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/project';
import { ProjectService } from 'src/app/Services/project.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { timeStamp } from 'node:console';

@Component({
  selector: 'app-edit-projects',
  templateUrl: './edit-projects.component.html',
  styleUrls: ['./edit-projects.component.scss']
})
export class EditProjectsComponent implements OnInit {

  id:any;
  data:any;
  project = new Project();

  constructor(private route: ActivatedRoute, private projectService: ProjectService) { }

  ngOnInit(): void {
    //console.log(this.route.snapshot.params.id);
    this.id = this.route.snapshot.params.id;
    this.getData();
  }

  getData(){
    this.projectService.getProjectById(this.id).subscribe(res =>{
      //console.log(res);
      this.data = res;
      this.project = this.data;
    })
  }

  updateProject(){
    this.projectService.updateProject(this.id, this.project).subscribe(res =>{
      
    })
  }

}
