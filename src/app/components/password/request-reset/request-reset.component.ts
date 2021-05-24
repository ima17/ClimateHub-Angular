import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../../services/jarwis.service';
import { SnotifyService } from 'ng-snotify';


@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.scss']
})
export class RequestResetComponent implements OnInit {
  public form ={
    email:null
  };

  constructor(
    private Jarvis: JarwisService,
    private notify: SnotifyService,
    private Notify:SnotifyService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.Notify.info('Wait...' ,{timeout:5000})
    this.Jarvis.sendPasswordLink(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.notify.error(error.error.error)
    );
  }

  handleResponse(res) {
    this.Notify.success(res.data,{timeout:0});
    this.form.email = null;
  }
 
}
