import { Component, OnInit } from '@angular/core';
import { CarService } from '../shared/car/car.service';
import { GiphyService } from '../shared/giphy/giphy.service';
import { OwnerService } from '../shared/owner/owner.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars: Array<any>;
  owners: Array<any>;

  constructor(private carService: CarService, private giphyService: GiphyService, private ownerService: OwnerService) { }

  ngOnInit() {
    this.carService.getAll().subscribe(data => {
      this.cars = data._embedded.cars;
      for (const car of this.cars) {
        car.id = car._links.car.href.substring(48);
        this.giphyService.get(car.name).subscribe(url => car.giphyUrl = url);
      }
    });
    this.ownerService.getAll().subscribe(data => {
      this.owners = data._embedded.owners;
    });
  }
}
