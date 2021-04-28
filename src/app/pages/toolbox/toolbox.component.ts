import { Component, OnInit } from '@angular/core';
import { ProjectDataService } from 'src/app/Services/project-data.service';


@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent implements OnInit {
  publicToolbox:any;
  privateToolbox:any;


  constructor(private dataService:ProjectDataService) { }

  ngOnInit(): void {
    this.getPublicToolboxData();
    this.getPrivateToolboxData();
    
  }

  getPublicToolboxData(){
    this.dataService.getPublicToolBoxData().subscribe(res =>{
      this.publicToolbox=res;
    });
  };

  getPrivateToolboxData(){
    this.dataService.getPrivateToolBoxData().subscribe(res =>{
      this. privateToolbox=res;
    });
  };

  
}
