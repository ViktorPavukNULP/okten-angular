import { Component, OnInit } from '@angular/core';

import {ICar} from "../../interfaces/car.interface";
import {CarService} from "../../services/car.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: ICar[];
  form: FormGroup;

  constructor(private carService:CarService) {
    this._createForm();
  }
  _createForm() {
    this.form = new FormGroup({
      model: new FormControl(''),
      year: new FormControl(''),
      price: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.carService.getAll().subscribe(value => this.cars = value);
  }

  create() {
    this.carService.create(this.form.value).subscribe(value => this.cars.push(value));
  }

}
