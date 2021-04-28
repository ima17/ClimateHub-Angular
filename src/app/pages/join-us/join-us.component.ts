import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JoinUs } from 'src/app/join-us';
import { DataService } from 'src/app/services/data.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.scss']
})
export class JoinUSComponent implements OnInit {
  joinUs= new JoinUs();

  constructor(private dataService:DataService, private router: Router, private Notify:SnotifyService) { }

  ngOnInit(): void {
  }

  insertData(){
    this.dataService.insertData(this.joinUs).subscribe(res => {
      //console.log(res);
      this.Notify.success('Done!')
      this.router.navigateByUrl('#');
    })
  }

} 
