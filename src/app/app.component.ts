import { Component } from '@angular/core';
import {FormArray, FormBuilder, Validators} from "@angular/forms";
import {SuperHero} from "./superheros";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Tutorial';
  siteName = 'Angular 10 Forms - Techie Ocean';

  weapons = ['Iron Suit', 'Hammer', 'Bow And Arrow','Shield','Raw Power'];

  specialities = [ 'Technology', 'God of Thunder', 'Archery','War And Leadership','Scientist'];

  model = new SuperHero( 1, 'Iron Man', this.weapons[0], this.specialities[0], 'Tony Stark' );

  submitted = false;

  ngOnInit(): void {
  }

  constructor() {
  }


  onSubmit(){

    this.submitted =true;
  }


}

