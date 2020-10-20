import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../shared/giphy/giphy.service';
import { OwnerService } from '../shared/owner/owner.service';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {
  owners: Array<any>;

  constructor(private ownerService: OwnerService, private giphyService: GiphyService) { }

  ngOnInit() {
    this.ownerService.getAll().subscribe(data => {
      this.owners = data._embedded.owners;
      for (const owner of this.owners) {
        owner.id = owner._links.owner.href.substring(50);
        this.giphyService.get(owner.name).subscribe(url => owner.giphyUrl = url);
      }
    });
  }
}
