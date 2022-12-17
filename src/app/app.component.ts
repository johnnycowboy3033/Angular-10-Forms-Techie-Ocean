import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Tutorial';
  siteName = 'Angular 10 Forms - Techie Ocean';

  //Reactive Forms
  technologyUsed = new FormControl('Angular 7');
  public _displayTechUsed : string  = '';

  get displayTechUsed(): string {
    return this._displayTechUsed;
  }

  set displayTechUsed(value: string) {
    this._displayTechUsed = value;
  }

  ngOnInit(): void {
    // called after the constructor and called  after the first
  }

  constructor() {
    // constructor called first time before the ngOnInit()

    console.log( ' ** CASEY ** Before Button Click: ' + this.technologyUsed.value);

  }
  setDefaultValue(){
    this.technologyUsed.setValue('Angular 8');

    console.log( ' ** CASEY ** After Button Click: ' + this.technologyUsed.value);

  }

  getInputValue(){
    console.log( ' ** CASEY ** Get Input Value: ' + this.technologyUsed.value);

    if (this.technologyUsed.value != null) {
      this._displayTechUsed = this.technologyUsed.value;
    }
  }
}

