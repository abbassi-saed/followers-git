import { Component, OnInit } from '@angular/core';
import { GithubServiceFollowersService } from '../github-service-followers.service';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  constructor(private githubServiceFollowersService :GithubServiceFollowersService) { }
  followers;
  ngOnInit(): void {
    this.githubServiceFollowersService.getAll()
    .subscribe(Response => {
      this.followers = Response;
      console.log(this.followers);
    })
  }

 

}
