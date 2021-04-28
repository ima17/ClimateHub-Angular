import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-projects',
  templateUrl: './upload-projects.component.html',
  styleUrls: ['./upload-projects.component.scss']
})
export class UploadProjectsComponent implements OnInit {

  uploadForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      
      category:['', Validators.required],
      project_title:['', Validators.required],
      energy_strategy:['', Validators.required],
      bulding_scale:['', Validators.required],
      climate_zone:['', Validators.required],
      material:['', Validators.required],
      parameters:['', Validators.required],
      type_of_doc:['', Validators.required],
      mode_of_info:['', Validators.required],
      world_region:['', Validators.required],
      topic:['', Validators.required],
      accessible:['', Validators.required],
      img_file:['', Validators.required],
      project_file:['', Validators.required]
    });
  }

  get f() {return this.uploadForm.controls;}

  onSubmit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.uploadForm.invalid) {
      return;
  }

    // display form values on success
    alert('SUCCESS!! :)\n\n' + JSON.stringify(this.uploadForm.value, null, 4));
}
onReset() {
  this.submitted = false;
  this.uploadForm.reset();
}

}
