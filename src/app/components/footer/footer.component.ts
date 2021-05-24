import { Component, OnInit } from '@angular/core';
import { ProjectDataService } from 'src/app/Services/project-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  latestpublicprojects:any;

  constructor(private dataService:ProjectDataService) { }

  ngOnInit(): void {
    this.getLatestPublicProjectsData();
  }

  getLatestPublicProjectsData(){
    this.dataService.getLatestPublicProjectData().subscribe(res =>{
      this.latestpublicprojects=res;
    });
  };

}
