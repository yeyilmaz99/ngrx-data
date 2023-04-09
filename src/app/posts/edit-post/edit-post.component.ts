import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  editPostForm: FormGroup;
  id:string;
  constructor(private postService:PostService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.editPostForm = new FormGroup({
      title: new FormControl(null),
      description: new FormControl(null)
    })
    this.id = this.route.snapshot.params['id'];
    this.postService.entities$.subscribe(posts => {
      const post = posts.find(post => post.id === this.id)
      this.editPostForm.patchValue({
        title:post.title,
        description:post.description
      })
    })

  }

  onUpdatePost(){
    const postData = {
      ...this.editPostForm.value,
      id:this.id
    }

    this.postService.update(postData);
    this.router.navigate(['/posts'])
  }

}
