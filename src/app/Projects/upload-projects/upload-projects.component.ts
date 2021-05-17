import { ProjectService } from './../../Services/project.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
//import { MouseEvent, MapsAPILoader } from '@agm/core';
// import { LatLngLiteral } from '@agm/core';
import {
  MapsAPILoader
} from '@agm/core';
@Component({
  selector: 'app-upload-projects',
  templateUrl: './upload-projects.component.html',
  styleUrls: ['./upload-projects.component.scss']
})
export class UploadProjectsComponent implements OnInit {

  uploadForm: FormGroup;
  submitted = false;
  lat = 6.5854;
  lng = 79.9607;
  longitude: any;
  latitude: any;
  project_file: File;
  img_file: File;


  zoom: number = 8;

  markers: any[] = [
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: 'C',
		  draggable: true
	  }
  ]

  constructor(private formBuilder: FormBuilder, private projectService:ProjectService) { }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      
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

  get f() {return this.uploadForm.controls;}

  onSubmit(){
    this.submitted = true;

    // stop here if form is invalid
  //   if (this.uploadForm.invalid) {
  //     return;
  // }

    // console.log(this.uploadForm)
    let formData:FormData = new FormData();
    formData.append('project_title', this.uploadForm.get('project_title').value);
    formData.append('author', this.uploadForm.get('author').value);
    formData.append('organisation', this.uploadForm.get('organisation').value);
    formData.append('abstract', this.uploadForm.get('abstract').value);
    formData.append('category', this.uploadForm.get('category').value);
    formData.append('energy_strategy', this.uploadForm.get('energy_strategy').value);
    formData.append('bulding_scale', this.uploadForm.get('bulding_scale').value);
    formData.append('climate_zone', this.uploadForm.get('climate_zone').value);
    formData.append('material', this.uploadForm.get('material').value);
    formData.append('parameters', this.uploadForm.get('parameters').value);
    formData.append('type_of_doc', this.uploadForm.get('type_of_doc').value);
    formData.append('mode_of_info', this.uploadForm.get('mode_of_info').value);
    formData.append('topic', this.uploadForm.get('topic').value);
    formData.append('world_region', this.uploadForm.get('world_region').value);
    formData.append('longitude', this.uploadForm.get('longitude').value);
    formData.append('latitude', this.uploadForm.get('latitude').value);
    formData.append('project_file', this.project_file, this.project_file.name);
    formData.append('img_file', this.img_file, this.img_file.name);
    formData.append('accessible', this.uploadForm.get('accessible').value);
formData.forEach((data:any)=>{
  console.log(data)
})
  this.projectService.uploadProject(formData).subscribe((res:any)=>{
    console.log(res)
  })
    // display form values on success
    // alert('SUCCESS!! :)\n\n' + JSON.stringify(this.uploadForm.value, null, 4));
}
onReset() {
  this.submitted = false;
  this.uploadForm.reset();
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

// fileChange(event) {
//   let fileList: File = event.target.files;
//   console.log(fileList)
//   // if(fileList.length > 0) {
//   //     let file: File = fileList[0];
//   //     let formData:FormData = new FormData();
//   //     formData.append('uploadFile', file, file.name);
//   //     let headers = new Headers();
//   //     /** In Angular 5, including the header Content-Type can invalidate your request */
//   //     headers.append('Content-Type', 'multipart/form-data');
//   //     headers.append('Accept', 'application/json');
//   //     let options = new RequestOptions({ headers: headers });
//   //     this.http.post(`${this.apiEndPoint}`, formData, options)
//   //         .map(res => res.json())
//   //         .catch(error => Observable.throw(error))
//   //         .subscribe(
//   //             data => console.log('success'),
//   //             error => console.log(error)
//   //         )
//   // }
// }

}
