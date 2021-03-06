import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarService } from '../car/car.service';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  public API = '//thawing-chamber-47973.herokuapp.com';
  public OWNER_API = this.API + '/owners';
  cars: Array<any>;
  owner: any = {};

  constructor(private http: HttpClient, private carService: CarService) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.OWNER_API);
  }

  get(id: string) {
    return this.http.get(this.OWNER_API + '/' + id);
  }

  save(owner: any): Observable<any> {
    let result: Observable<Object>;
    if (owner['href']) {
      result = this.http.put(owner.href, owner);
    } else {
      result = this.http.post(this.OWNER_API, owner);
    }
    return result;
  }

  unlinkCar(dni: string) {
    this.carService.getAll().subscribe(carData => {
      this.cars = carData._embedded.cars;
      for (const car of this.cars) {
        if (car.ownerDni === dni) {
          car.href = car._links.car.href;
          car.ownerDni = null;
          this.carService.save(car).subscribe(result => {
            console.log("Operación realizada con éxito.")
          }, error => console.error(error));
        }
      }
    });
  }

  remove(href: string, dni: string) {
    this.unlinkCar(dni);
    return this.http.delete(href);
  }
}
