import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GiphyService } from '../shared/giphy/giphy.service';
import { OwnerService } from '../shared/owner/owner.service';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {
  owners: Array<any>;
  ownersToDelete: Array<any> = [];

  constructor(private ownerService: OwnerService, private giphyService: GiphyService, private router: Router) { }

  ngOnInit() {
    this.ownerService.getAll().subscribe(data => {
      this.owners = data._embedded.owners;
      for (const owner of this.owners) {
        owner.id = owner._links.owner.href.substring(50);
        this.giphyService.get(owner.name).subscribe(url => owner.giphyUrl = url);
      }
    });
  }

  push(owner: any){
    if(!this.ownersToDelete.includes(owner)){
      this.ownersToDelete.push(owner);
    } else{
      this.ownersToDelete.splice(this.ownersToDelete.indexOf(owner), 1);
    }
  }
  
  removeOwners(){
    for (const owner of this.ownersToDelete) {
      owner.href = owner._links.owner.href;
      console.log(owner);
      this.ownerService.remove(owner.href, owner.dni).subscribe(() => {
        console.log("Operación realizada con éxito.");
      }, error => console.error(error));
    }
    window.location.reload();
  }
}
