import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './services/data.service';
import { PostsService } from './services/posts.service';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceFollowersService extends DataService {

  constructor(http : HttpClient ) {
    super('https://api.github.com/users/IDBRAHIMDEV/followers',http)
   }
  
}
