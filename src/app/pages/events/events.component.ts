import { CalendarOptions, FullCalendarComponent} from '@fullcalendar/angular';
import { Component, OnInit, ViewChild, ElementRef,AfterViewChecked} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { EventInput, Calendar} from '@fullcalendar/core';
import { EventServiceService } from 'src/app/services/event-service.service';
import {Event} from 'src/app/event';
import daygridplugin from '@fullcalendar/daygrid';
import interactionplugin from '@fullcalendar/interaction';
import { of } from 'rxjs';




@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})


export class EventsComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins:[daygridplugin,interactionplugin],
   
  };

  @ViewChild("fullcalendar",{static:true})
  calendarComponent:FullCalendarComponent;
  dateForm:FormGroup;
  eventsCalendar:any[]=[];
  events:any[]=[];
  calendarEvents: EventInput[] = [];
  calendarPlugins = [daygridplugin,interactionplugin];
  calendarApi:Calendar;
  initialized = false;
  

  constructor(private EventService:EventServiceService) {
    const name = Calendar.name;

    var colors = ['#A93226', '#7D3C98', '#2471A3', '#229954', '#D68910',''];

    this.calendarEvents=[];

    this.EventService.getData().subscribe((data:any)=>{
      this.events=data;
      console.log(this.events);
      this.events.forEach(e=>{
        let calendarEvents={
          startEditable:false,
          id:e.id,
          title:e.title,
          start:new Date(e.sdate).getTime(),
          end:new Date(e.edate).getTime(),
          allDay:true,
          //color:colors[Math.floor(Math.random() * colors.length)]
          color:'#1A5276',

        };
        this.eventsCalendar.push(calendarEvents);
        this.loadEvents();
      });
    })
   }
  
  ngOnInit(): void {
    this.dateForm=new FormGroup({
      date:new FormControl(null)
    });
  }
  
  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }

  
ngAfterViewInit(){
   //this.calendarApi=this.calendarComponent.getApi();
    

  if(this.calendarApi && !this.initialized){
    this.initialized=true;
    this.loadEvents();
  }
}

loadEvents(){
  this.calendarEvents=this.eventsCalendar;

  this.calendarApi.removeAllEventSources(); 
  //(<any>$('#fullcalendar')).fullCalendar('removeEventSources');

  this.calendarApi.addEventSource(this.calendarEvents);
}

gotoDate(){
  if(this.calendarApi){
    this.calendarApi.gotoDate(this.dateForm.controls["date"].value);
  }
}

}
