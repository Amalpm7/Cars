import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor(private myapi:ApiService) {this.putData() }
  putData=()=>{
    this.myapi.getData().subscribe(
      (data)=>{
        this.carData=data
      }
    )
  }
  carData:any=[]

  ngOnInit(): void {
  }

}
