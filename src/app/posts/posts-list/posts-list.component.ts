import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import {Observable} from 'rxjs'
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  posts$:Observable<Post[]>;
  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.posts$ = this.postService.entities$;
  }


  onDeletePost(event:Event, id:string){
    event.preventDefault();
    if(confirm('Are you sure you want to delete the post?')){
      this.postService.delete(id);
    }
  }


}
