import { Component, OnInit } from '@angular/core';
import {Event} from 'src/app/event';
import {EventServiceService} from 'src/app/services/event-service.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {HttpParams, HttpClient } from '@angular/common/http';
import {dateLessThan} from 'src/app/validation/date.validation';
import swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.scss']
})
export class EventAddComponent implements OnInit {

  eventAdd: FormGroup;
  loading=false;
  success=false;

  constructor(private EventService: EventServiceService, private formBuilder:FormBuilder) {
    this.eventAdd = this.formBuilder.group({
      title: ['',[Validators.required]],
      description: ['',[Validators.required]],
      venue: ['', [Validators.required]],
      from: ['', [Validators.required]],
      to: ['', [Validators.required]],
      recurrence: ['', [Validators.required]],
      partcipantType: ['', [Validators.required]],
      isPoll: ['']

    },
      {validators:dateLessThan('from','to')},
      
    );
   }

   Event=new Event;
  

  ngOnInit(): void {
  }

  insertData(){
    
    
    var formData: any = new FormData();
    formData.append("title", this.eventAdd.get('title').value);
    formData.append("venue", this.eventAdd.get('venue').value);
    formData.append("description", this.eventAdd.get('description').value);
    formData.append("sdate", this.eventAdd.get('from').value);
    formData.append("edate", this.eventAdd.get('to').value);
    formData.append("recurrence", this.eventAdd.get('recurrence').value);
    formData.append("partcipantType", this.eventAdd.get('partcipantType').value);
    formData.append("isPoll", this.eventAdd.get('isPoll').value);


    this.EventService.insertData(formData).subscribe(
      (response) => console.log(response),
      
      (error) => console.log(error)
    )
  
  
 
}
sendMail(){
  this.EventService.sendNotification().subscribe(data=>{
    swal.fire({
      title:'Great...!',
      text:data['message'],
      icon:'success'
    });
  }),error=>console.error(error);
}

getUserType(){
  this.EventService.getUserType(this.Event.partcipantType).subscribe(res=>{
    console.log(res);
  })
  console.log(this.Event.partcipantType);
}

functionOrder(){
  this.insertData();
  //this.createPoll();
  //this.sendMail();
}

createPoll(){
  const isPoll=this.eventAdd.value.isPoll;
  console.log(isPoll);
}
}
