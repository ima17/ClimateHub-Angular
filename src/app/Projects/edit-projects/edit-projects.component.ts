import { ProjectService } from 'src/app/Services/project.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/project';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';
import {Observable} from 'rxjs';
import {AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';


@Component({
    selector: 'app-edit-projects',
    templateUrl: './edit-projects.component.html',
    styleUrls: ['./edit-projects.component.scss']
  })
  export class EditProjectsComponent implements OnInit {

  // init data
  data : Project = new Project();
  form : FormGroup;
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
  // markers: any[] = [
  //   {
  //     lat: 51.723858,
  //     lng: 7.895982,
  //     label: 'C',
  //     draggable: true
  //   }
  // ]

  numberRegEx = /[-.0-9]+/;

  uploadProgressFile: Observable<number>;
  uploadProgressImage: Observable<number>;
  refFile: AngularFireStorageReference;
  refImage: AngularFireStorageReference;
  taskFile: AngularFireUploadTask;
  taskImage: AngularFireUploadTask;
  isChangeFile : boolean = false;
  isChangeImage : boolean = false;

  progressFile : number;
  progressImage : number;

  constructor(private formBuilder: FormBuilder, private route : ActivatedRoute,
              private service : ProjectService,private storage : AngularFireStorage,
              private router : Router) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const version_id = this.route.snapshot.paramMap.get('version_id');
    this.service.getProjectById(id).subscribe(
      {
        next : (value : Project) => {
          value.accessible = value.accessible == 1 ? "open" : "private";
          this.data = value;
          this.lat = parseFloat(this.data.latitude);
          this.longitude = parseFloat(this.data.longitude);
        },
        error : () => {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Something went wrong!',
          });
        }
      }
    );

    // set validators
    this.form = this.formBuilder.group({
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
  get f() { return this.form.controls; }

  updateProject(){
    this.submitted = true;
    //stop here if form is invalid
    // if (this.form.invalid) {
    //   return;
    // }

    let formData : any = new FormData();
    formData.append('id', this.data.id);
    formData.append('version_id',this.data.version_id);
    formData.append('admin_id',this.data.admin_id);
    formData.append('project_title', this.form.get('project_title').value);
    formData.append('project_title', this.form.get('project_title').value);
    formData.append('author', this.form.get('author').value);
    formData.append('organisation', this.form.get('organisation').value);
    formData.append('abstract', this.form.get('abstract').value);
    formData.append('category', this.form.get('category').value);
    formData.append('energy_strategy', this.form.get('energy_strategy').value);
    formData.append('bulding_scale', this.form.get('bulding_scale').value);
    formData.append('climate_zone', this.form.get('climate_zone').value);
    formData.append('material', this.form.get('material').value);
    formData.append('parameters', this.form.get('parameters').value);
    formData.append('type_of_doc', this.form.get('type_of_doc').value);
    formData.append('mode_of_info', this.form.get('mode_of_info').value);
    formData.append('topic', this.form.get('topic').value);
    formData.append('world_region', this.form.get('world_region').value);
    formData.append('longitude', this.form.get('longitude').value);
    formData.append('latitude', this.form.get('latitude').value);
    formData.append('accessible', 'open');

    const id = Math.random().toString(36).substring(2);

    // if both files changed
    if(this.isChangeFile && this.isChangeImage) {
      const projectFileName = `${this.project_file.name}_${id}_version_${1}`;
      const projectImageName = `${this.img_file.name}_${id}_version_${1}`;

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
                              this.callApi(formData);
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
    } else if(this.isChangeFile && !this.isChangeImage) {

      const projectFileName = `${this.project_file.name}_${id}_version_${1}`;

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
            this.taskFile.snapshotChanges().pipe(
              finalize(() => {
                this.refFile.getDownloadURL().subscribe(fileUrl => {
                  formData.append('project_file',fileUrl);
                  this.callApi(formData);
                });
              })
            ).subscribe();
          }
        }
      );
    } else if(!this.isChangeFile && this.isChangeImage) {
      const projectImageName = `${this.img_file.name}_${id}_version_${1}`;

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
            this.router.navigate(['/project-list']);
          },
          complete : () => {
            this.taskImage.snapshotChanges().pipe(
              finalize(() => {
                this.refImage.getDownloadURL().subscribe(imageUrl => {
                  formData.append('img_file',imageUrl);
                  this.callApi(formData);
                });
              })
            ).subscribe();
          }
        }
      );

    } else {
      console.log(this.form);
      this.callApi(formData);
    }
  }

  callApi(formData) {
    this.service.updateProject(formData)
      .subscribe({
        next : apiResponse => {
        },
        error : err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something Went Wrong!',

          })
          this.router.navigate(['/project-list']);
        },
        complete : () => {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Project Updated Successfully!',
          });
          this.router.navigate(['/project-list']);
        }
      });
  }

  onReset() {
    this.submitted = false;
    this.form.reset();
    this.img_file = null;
    this.project_file = null;
    this.progressImage = 0;
    this.progressFile = 0;
    this.isChangeFile = false;
    this.isChangeFile = false;
  }

  markerDragEnd($event: google.maps.MouseEvent | any){
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
  }

  projectFileChange(event) {
    let fileList: File = event.target.files;
    this.project_file=fileList[0];
    this.isChangeFile = true;
  }

  imgFileChange(event) {
    let fileList: File = event.target.files;
    this.img_file=fileList[0];
    this.isChangeImage = true;
  }

}

