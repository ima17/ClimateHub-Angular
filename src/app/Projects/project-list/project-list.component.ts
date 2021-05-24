import { ProjectService } from 'src/app/Services/project.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';

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

  Swal.fire({
    title: 'Do you want to delete this project?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.projectService.deleteProject(id).subscribe(res=>{
        this.getProjectsData();
      });
      
      Swal.fire(
        'Deleted!',
        'The project is deleted.',
        'success'
      )
    }
  })
}


}
