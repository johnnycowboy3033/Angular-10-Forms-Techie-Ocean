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
  displayFormGroup = '';

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
      //Converts Object to a string
      this.displayFormGroup = '' + JSON.stringify(this.userProfileForm.value );

  }



}

