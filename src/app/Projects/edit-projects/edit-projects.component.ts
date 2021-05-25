import { ProjectService } from 'src/app/Services/project.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/project';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';
import {Observable} from 'rxjs';
import {AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from '@angular/fire/storage';


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
  isChangeFile : boolean = false;
  isChangeImage : boolean = false;

  progressFile : number;
  progressImage : number;

  constructor(private formBuilder: FormBuilder, private route : ActivatedRoute,
              private service : ProjectService,private storage : AngularFireStorage) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const version_id = this.route.snapshot.paramMap.get('version_id');
    this.service.getProjectById(id).subscribe(
      {
        next : (value : Project) => {
          this.data = value;
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
  }

  imgFileChange(event) {
    let fileList: File = event.target.files;
    this.img_file=fileList[0];
  }

}

