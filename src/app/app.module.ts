import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';
import { SinglePostComponent } from './posts/single-post/single-post.component';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { entityConfig } from './entity-metadata';
import { EntityDataModule, EntityDataService } from '@ngrx/data';
import { HttpClientModule } from '@angular/common/http';
import { PostsDataService } from './posts/posts-data.service';
import { PostsResolver } from './posts/posts.resolver';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    AddPostComponent,
    EditPostComponent,
    SinglePostComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({logOnly:environment.production}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig)
  ],
  providers: [PostsDataService, PostsResolver],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(entityDataService:EntityDataService, postsDataService:PostsDataService){
    entityDataService.registerService('Post', postsDataService)
  }
}
