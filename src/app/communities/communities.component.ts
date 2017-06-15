import { Component, OnInit } from '@angular/core';
import { Community } from './community.model';
import { CommunityService } from './community.service';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.css'],
  providers: [CommunityService]
})
export class CommunitiesComponent implements OnInit {
  communities: Array<Community>;
  total: Number;

  constructor(private communityService: CommunityService) { }

  ngOnInit(): void {
    this.getCommunities();
  }

  getCommunities(): void {
    this.communityService
      .getCommunities()
      .then(communities => {
        this.communities = communities;
        this.total = communities.length;
      });
  }
}
