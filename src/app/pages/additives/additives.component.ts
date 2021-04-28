import { Component, OnInit } from '@angular/core';
import { ProjectDataService } from 'src/app/Services/project-data.service';


@Component({
  selector: 'app-additives',
  templateUrl: './additives.component.html',
  styleUrls: ['./additives.component.scss']
})
export class AdditivesComponent implements OnInit {
  publicAdditives:any;
  privateAdditives:any;




  constructor(private dataService:ProjectDataService) { }

  ngOnInit(): void {
    this.getPublicAdditivesData();
    this.getPrivateAdditivesData();
    
  }

  getPublicAdditivesData(){
    this.dataService.getPublicAdditivesData().subscribe(res =>{
      this.publicAdditives=res;
    });
  };

  getPrivateAdditivesData(){
    this.dataService.getPrivateAdditivesData().subscribe(res =>{
      this. privateAdditives=res;
    });
  };

  
}
