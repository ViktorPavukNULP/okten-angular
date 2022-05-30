import {Component, Input, OnInit} from '@angular/core';

import {ICar} from "../../interfaces/car";
import {CarService} from "../../services/car.service";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input()
  car: ICar;

  constructor(private carService:CarService) { }

  ngOnInit(): void {
  }

  delete(id:string):void {
    this.carService.deleteById(id);
    console.log(id);
  }
}
