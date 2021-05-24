import { Component, OnInit } from '@angular/core';
import { Posts } from '../Models/posts.models';
import { PostService }   from '../allposts/post.service';

@Component({
  selector: 'app-allposts',
  templateUrl: './allposts.component.html',
  styleUrls: ['./allposts.component.scss']
})
export class AllpostsComponent implements OnInit {

  posts:Posts[];

 constructor(private postService:PostService) { }

  ngOnInit() {
    this.posts=this.postService.getPosts();
  }
  /*constructor() { }

  ngOnInit() {
    
  }*/

}
