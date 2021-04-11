import { Component, OnInit } from '@angular/core';
import {EventServiceService } from 'src/app/services/event-service.service';
import {HttpClient} from '@angular/common/http';
import swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-event-mail',
  templateUrl: './event-mail.component.html',
  styleUrls: ['./event-mail.component.scss']
})
export class EventMailComponent implements OnInit {

  constructor(private EventService: EventServiceService) { }

  ngOnInit(): void {
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
}
