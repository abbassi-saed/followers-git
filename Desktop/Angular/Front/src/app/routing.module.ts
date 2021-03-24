import {NgModule} from '@angular/core';
import {Routes,RouterModule, RouterLink} from '@angular/router';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostsComponent } from './posts/posts.component';
import { ProfileFollowerComponent } from './profile-follower/profile-follower.component';

const routes : Routes = [
    {
      path:"" , 
      component: HomeComponent
    },
    {
      path:"followers" ,
       component: GithubFollowersComponent
      },
    {
      path:"posts" , 
      component: PostsComponent
    },
    {
      path:"followers/:id/:username" ,
       component: ProfileFollowerComponent
      },
    {
      path:"**" ,
       component: NotFoundComponent
      },
     
  ]

@NgModule ({ 
    imports :[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule{}