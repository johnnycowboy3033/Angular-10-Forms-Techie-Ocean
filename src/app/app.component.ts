import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Tutorial';
  siteName = 'Angular 10 Forms - Techie Ocean';

  userProfileForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl(''),
      age: new FormControl(''),
      email: new FormControl(''),
      address : new FormGroup({
        address1: new FormControl(''),
        address2: new FormControl(''),
        state: new FormControl(''),
        zip: new FormControl(''),
      })
  });

  ngOnInit(): void {
  }

  constructor() {
  }

  onSubmit(){
      console.log(this.userProfileForm.value);

  }

  updateModelPartially(){

    this.userProfileForm.patchValue({
      firstName: 'Jimmy',
      address: {
        address1: 'ABC Apartment'
      }
    })
  }



}

