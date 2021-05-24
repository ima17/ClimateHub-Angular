import { ProjectService } from 'src/app/Services/project.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/project';
import { ActivatedRoute } from '@angular/router';
import { MapsAPILoader } from '@agm/core';
import swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
    selector: 'app-edit-projects',
    templateUrl: './edit-projects.component.html',
    styleUrls: ['./edit-projects.component.scss']
  })
  export class EditProjectsComponent implements OnInit {

  project = new Project();

  editProject: FormGroup;
  submitted = false;
  lat = 6.5854;
  lng = 79.9607;
  longitude: any;
  latitude: any;
  project_file: File;
  img_file: File;
  UploadData:any;

  id:any;
  data:any;

  test : string = "Amesh";

  zoom: number = 8;

  markers: any[] = [
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: 'C',
		  draggable: true
	  }
  ]

  constructor(private route:ActivatedRoute, private formBuilder: FormBuilder, private projectService:ProjectService) {
    this.editProject = this.formBuilder.group({

      project_title:['', Validators.required],
      author:['', Validators.required],
      organisation:['', Validators.required],
      abstract:['', Validators.required],
      category:['', Validators.required],
      energy_strategy:['', Validators.required],
      bulding_scale:['', Validators.required],
      climate_zone:['', Validators.required],
      material:['', Validators.required],
      parameters:['', Validators.required],
      type_of_doc:['', Validators.required],
      mode_of_info:['', Validators.required],
      topic:['', Validators.required],
      world_region:['', Validators.required],
      longitude:['', Validators.required],
      latitude:['', Validators.required],
      project_file:['', Validators.required],
      img_file:['', Validators.required,],
      accessible:['', Validators.required]
    });
  }

  get f() {return this.editProject.controls;}

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

    this.project.project_title=this.editProject.value.project_title;
    this.project.author=this.editProject.value.author;
    this.project.organisation=this.editProject.value.organisation;
    this.project.abstract=this.editProject.value.abstract;
    this.project.category=this.editProject.value.category;
    this.project.energy_strategy=this.editProject.value.energy_strategy;
    this.project.bulding_scale=this.editProject.value.bulding_scale;
    this.project.climate_zone=this.editProject.value.climate_zone;
    this.project.material=this.editProject.value.material;
    this.project.parameters=this.editProject.value.parameters;
    this.project.type_of_doc=this.editProject.value.type_of_doc;
    this.project.mode_of_info=this.editProject.value.mode_of_info;
    this.project.topic=this.editProject.value.topic;
    this.project.world_region=this.editProject.value.world_region;
    this.project.longitude=this.editProject.value.longitude;
    this.project.latitude=this.editProject.value.latitude;
    this.project.img_file=this.editProject.value.img_file;
    this.project.accessible=this.editProject.value.accessible;

    this.projectService.updateProject(this.id, this.project).subscribe(res =>{
      swal.fire({
        title:'',
        text:'Project Updateed Successfully',
        icon:'success'
      });
    }),
    (error=>{
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something Went Wrong!',

      })

    })
  }


clickedMarker(label: string, index: number) {
  console.log(`clicked the marker: ${label || index}`)
}

mapClicked($event: any) {
  this.markers.push({
    lat: $event.coords.lat,
    lng: $event.coords.lng,
    draggable: true
  });
}

markerDragEnd($event: google.maps.MouseEvent | any){
  // console.log($event)
  console.log($event.coords.lng,$event.coords.lat)
  this.latitude=$event.coords.lat;
  this.longitude=$event.coords.lng;
}

onMouseOut(aa, $event){

}

onMouseOver(ss, sdsd){

}

projectFileChange(event) {
  let fileList: File = event.target.files;
  console.log(fileList)
  this.project_file=fileList[0];
}

imgFileChange(event) {
  let fileList: File = event.target.files;
  console.log(fileList)
  this.img_file=fileList[0];
}


}

