import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory, EntityServicesElements } from '@ngrx/data';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService extends EntityCollectionServiceBase<Post> {
  constructor(serviceElementsFactory:EntityCollectionServiceElementsFactory) {
    super('Post', serviceElementsFactory);
   }
}
