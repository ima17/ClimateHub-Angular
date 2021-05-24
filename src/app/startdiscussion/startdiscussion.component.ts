import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Filetype} from '../Models/filetype.model'
import {Viewer} from '../Models/viewer.model'
import { Posts } from '../Models/posts.models';

import { PostService }   from '../allposts/post.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-startdiscussion',
  templateUrl: './startdiscussion.component.html',
  styleUrls: ['./startdiscussion.component.scss']
})
export class StartdiscussionComponent implements OnInit {
  @ViewChild('postsForm') public startdisscussionForm :NgForm;
  previewPhoto=false;
  
  filetypes:Filetype[]=[
    { id:1, name: 'Image'},
    { id:2, name: 'Pdf'},
  ];

  viewer:Viewer[]=[
    { id:1, name: 'Private users'},
    { id:2, name: 'Partner organizations'},
    { id:3, name: 'Both'},
   // { id:4, name: 'Partners'},
  ];

  
  title: string;
  discription: string;

  posts:Posts={
    id: null,
    title:null,
    discription:null,
    filetype:null,
    date: null,
    postPath:null,
    viewers:null
  }
  
  
  constructor( private _postSevice:PostService,
                private _router:Router
                ) { }

  

  ngOnInit(): void {
  }
  
  savePosts(): void{
    this._postSevice.save(this.posts);
    this._router.navigate(['Blog']);
  }

  togglePhotoPreview(){
    this.previewPhoto=!this.previewPhoto;
  }

}
