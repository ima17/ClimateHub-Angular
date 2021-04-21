import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Event} from 'src/app/event';
import {EventServiceService } from 'src/app/services/event-service.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {dateLessThan} from 'src/app/validation/date.validation';
import swal from 'sweetalert2/dist/sweetalert2.js';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss']
})
export class EventEditComponent implements OnInit {

  eventEdit: FormGroup;
  id:any;
  data:any;
  event=new Event;

  constructor(private route:ActivatedRoute, private Eventservice:EventServiceService, private formBuilder:FormBuilder) {
    this.eventEdit = this.formBuilder.group({
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

  ngOnInit(): void {
    //console.log(this.route.snapshot.params.id);
    this.id=this.route.snapshot.params.id;
    this.getData();
  }

  getData(){
    this.Eventservice.getEventById(this.id).subscribe(
      (eventDetail:Event)=>this.editEvent(eventDetail)
    );
  }

  editEvent(eventDetail:Event){
    this.eventEdit.patchValue({
      title:eventDetail.title,
      description:eventDetail.description,
      venue:eventDetail.venue,
      from:eventDetail.sdate,
      to:eventDetail.edate,
      recurrence:eventDetail.recurrence,
      partcipantType:eventDetail.partcipantType,
      isPoll:eventDetail.isPoll
    })
  }
  

  updateEvent(){
    this.event.title=this.eventEdit.value.title;
    this.event.venue=this.eventEdit.value.venue;
    this.event.description=this.eventEdit.value.description;
    this.event.sdate=this.eventEdit.value.from;
    this.event.edate=this.eventEdit.value.to;
    this.event.recurrence=this.eventEdit.value.recurrence;
    this.event.partcipantType=this.eventEdit.value.partcipantType;
    this.event.isPoll=this.eventEdit.value.isPoll;

    this.Eventservice.updateEvent(this.id,this.event).subscribe(res=>
      { 
        
        swal.fire({
          title:'',
          text:res['message'],
          icon:'success'
        });
      });
  }


}
