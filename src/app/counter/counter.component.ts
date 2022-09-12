import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  counter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  dec(): void {
    if (this.counter > 0){
    this.counter--;
    }
  }

  add(): void {
    this.counter++;
  }

  res(): void {
    this.counter = 0;
  }

  boost(): void {
    if (this.counter % 10 !== 0){
    this.counter += 2;
    }
  }

}
