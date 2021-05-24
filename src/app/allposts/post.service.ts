import { Injectable } from "@angular/core";
import { Posts } from "../Models/posts.models";

@Injectable()
export class PostService{
    private posts:Posts[]=[
        { id: 1,
          title:'Materials transparency in practice: Earning LEED v4 points',
          discription: 'LEED V4 MATERIAL & RESOURCES BUILDING PRODUCT DISCLOSURE CREDITS ARE BEING PURSUED ON THE ALICE WEST FLEET ELEMENTARY SCHOOL PROJECT, DESIGNED BY VMDO ARCHITECTS FOR ARLINGTON PUBLIC SCHOOLS',
          filetype:'Image',
          date: new Date('10/25/2020'),
          postPath:'assets/posts/picture1.png',
          viewers:'All Users'
        },
        { id: 2,
          title:'Is Rockefeller Center the true center of New York?',
          discription: 'New York has several centers, but the one named for the Rockefellers might be the most enduring.',
          filetype:'Image',
          date: new Date('10/25/2020'),
          postPath:'assets/posts/picture2.png',
          viewers:'Private'
        },
        { id: 3,
          title:'Haystack Mountain School of Crafts might be the answer.',
          discription: 'Its a small victory for humility, declared Stuart Kestenbaum, the director of Haystack Mountain School of Crafts in Deer Isle, Maine, when his campus was awarded the AIAs Twenty-Five Year Award in 1994. The buildings work doubly well because, in addition to being integrated into the site, they convey what the best of the crafts can impart. There is the human scale, the sense of seemingly intuitive grace, and a thoughtful relationship to the earth.',
          filetype:'Image',
          date: new Date('10/25/2020'),
          postPath:'assets/posts/picture3.png',
          viewers:'Partners'
        }
      ];

    getPosts():Posts[]{
        return this.posts;
    }

    save(post:Posts){
        this.posts.push(post);
    }

}