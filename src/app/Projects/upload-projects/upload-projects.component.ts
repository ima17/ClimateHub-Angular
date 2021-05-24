import { ProjectService } from 'src/app/Services/project.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/project';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';
import {AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from '@angular/fire/storage';
import { Observable } from 'rxjs';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-upload-projects',
  templateUrl: './upload-projects.component.html',
  styleUrls: ['./upload-projects.component.scss']
})
export class UploadProjectsComponent implements OnInit {

  // init
  project = new Project();
  uploadForm : FormGroup;
  submitted = false;
  lat = 6.5854;
  lng = 79.9607;
  longitude: any;
  latitude: any;

  // files
  project_file: File = null;
  img_file: File = null;

  // default map values
  zoom: number = 8;
  markers: any[] = [
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: 'C',
		  draggable: true
	  }
  ]

  numberRegEx = /[-.0-9]+/;

  uploadProgressFile: Observable<number>;
  uploadProgressImage: Observable<number>;
  refFile: AngularFireStorageReference;
  refImage: AngularFireStorageReference;
  taskFile: AngularFireUploadTask;
  taskImage: AngularFireUploadTask;

  progressFile : number;
  progressImage : number;

  constructor(private formBuilder: FormBuilder, private projectService:ProjectService,
  private storage : AngularFireStorage) { }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      project_title: ['', Validators.required],
      author: ['', Validators.required],
      organisation: ['', Validators.required],
      abstract: ['', Validators.required],
      category: ['', Validators.required],
      energy_strategy: ['', Validators.required],
      bulding_scale: ['', Validators.required],
      climate_zone: ['', Validators.required],
      material: ['', Validators.required],
      parameters: ['', Validators.required],
      type_of_doc: ['', Validators.required],
      mode_of_info: ['', Validators.required],
      topic: ['', Validators.required],
      world_region: ['', Validators.required],
      longitude: ['', Validators.required, Validators.pattern(this.numberRegEx)],
      latitude: ['', Validators.required, Validators.pattern(this.numberRegEx)],
      accessible: ['', Validators.required]
    });
  }

  // get form controls
  get form() { return this.uploadForm.controls; }

  uploadProject() {

      this.submitted = true;
      //stop here if form is invalid
      // if (this.uploadForm.invalid) {
      //   return;
      // }

      // if project file not found
      if(this.project_file == null || !this.project_file.name) {
          Swal.fire({
            icon: 'warning',
            title: 'Project File Required...',
            text: 'Please upload project file to proceed!',

          })
          return;
      }

      // if image file not found
      if(this.img_file == null || !this.img_file.name) {
          Swal.fire({
            icon: 'warning',
            title: 'Image File Required...',
            text: 'Please upload image file to proceed!',

          })
          return;
      }

    let formData : any = new FormData();
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
    const id = Math.random().toString(36).substring(2);
    const projectFileName = `${this.project_file.name}_${id}_version_${1}`;
    const projectImageName = `${this.img_file.name}_${id}_version_${1}`;
    formData.append('accessible', this.uploadForm.get('accessible').value);

    // upload file
    this.refFile = this.storage.ref(`files/${projectFileName}`);
    this.taskFile = this.refFile.put(this.project_file);
    this.uploadProgressFile = this.taskFile.percentageChanges();
    this.uploadProgressFile.subscribe(
      {
        next : res => this.progressFile = res,
        error : err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Project file upload failed!',
          })
          this.onReset();
        },
        complete : () => {
          // upload image
          this.refImage = this.storage.ref(`images/${projectImageName}`);
          this.taskImage = this.refImage.put(this.img_file);
          this.uploadProgressImage = this.taskImage.percentageChanges();
          this.uploadProgressImage.subscribe(
            {
              next : res => this.progressImage = res,
              error : err => {
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Project image upload failed!',
                })
                this.onReset();
              },
              complete : () => {
                this.taskFile.snapshotChanges().pipe(
                  finalize(() => {
                    this.refFile.getDownloadURL().subscribe(fileUrl => {
                      formData.append('project_file',fileUrl);
                      this.taskImage.snapshotChanges().pipe(
                        finalize(() => {
                          this.refImage.getDownloadURL().subscribe(imageUrl => {
                            formData.append('img_file',imageUrl);
                            this.projectService.uploadProject(formData)
                              .subscribe({
                                next : apiResponse => {
                                },
                                error : err => {
                                  Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    text: 'Something Went Wrong!',

                                  })
                                  this.onReset();
                                },
                                complete : () => {
                                  Swal.fire({
                                    icon: 'success',
                                    title: 'Success',
                                    text: 'Project Uploaded Successfully!',
                                  });
                                  this.onReset();
                                }
                              });
                          });
                        })
                      ).subscribe();
                    });
                  })
                ).subscribe();
              }
            }
          );
        }
      }
    );
  }

  onReset() {
    this.submitted = false;
    this.uploadForm.reset();
    this.img_file = null;
    this.project_file = null;
    this.progressImage = 0;
    this.progressFile = 0;
  }

  mapClicked($event: any) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }

  markerDragEnd($event: google.maps.MouseEvent | any){
    this.latitude=$event.coords.lat;
    this.longitude=$event.coords.lng;
  }

  projectFileChange(event) {
    let fileList: File = event.target.files;
    this.project_file = fileList[0];
  }

  imgFileChange(event) {
    let fileList: File = event.target.files;
    this.img_file = fileList[0];
  }

}
