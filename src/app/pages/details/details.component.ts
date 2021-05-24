import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProjectService} from '../../Services/project.service';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';
import {Project} from '../../project';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  data : Project = new Project();
  pdfUrl : any;

  constructor(private route : ActivatedRoute, private service : ProjectService,
  private sanitizer : DomSanitizer) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const version_id = this.route.snapshot.paramMap.get('version_id');

    this.service.getProjectById(id).subscribe(
      {
        next : (value : Project) => {
          this.data = value;
          this. getSafeUrl(this.data.project_file);
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
  }

  getSafeUrl(url){
    this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
