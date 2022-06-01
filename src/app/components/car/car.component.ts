import {Component, Input, OnInit} from '@angular/core';

import {ICar} from "../../interfaces/car.interface";
import {CarService} from "../../services/car.service";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input()
  car: ICar;
  @Input()
  cars: ICar[];
  constructor(private carService:CarService) { }

  ngOnInit(): void {
  }

    delete(id: number): void {
    this.carService.deleteById(id).subscribe( () => {
      // this.cars = this.cars.filter(car => car.id !== id);
      // console.log(this.cars);
      const index = this.cars.findIndex(car => car.id === id);
      this.cars.splice(index, 1)
    });
  }
}
