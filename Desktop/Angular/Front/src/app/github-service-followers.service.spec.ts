import { TestBed } from '@angular/core/testing';

import { GithubServiceFollowersService } from './github-service-followers.service';

describe('GithubServiceFollowersService', () => {
  let service: GithubServiceFollowersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubServiceFollowersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
