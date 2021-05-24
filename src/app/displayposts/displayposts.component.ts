import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../Models/blogpost.models';

@Component({
  selector: 'app-displayposts',
  templateUrl: './displayposts.component.html',
  styleUrls: ['./displayposts.component.scss']
})
export class DisplaypostsComponent implements OnInit {

  @Input() posts: Post;
  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  viewPosts(){
    this._router.navigate(['/displaypost',this.posts.id])
  }

}
