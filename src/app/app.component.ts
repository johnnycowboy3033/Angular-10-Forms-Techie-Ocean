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
  displayFirstName = '';
  display1Address1 = '';
  display2Address1 = '';

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

      // @ts-ignore
      this.displayFirstName = '' + JSON.stringify(this.userProfileForm.get(["firstName"]).value );
      // @ts-ignore
      this.display1Address1 = '' + JSON.stringify(this.userProfileForm.get(["address","address1"]).value );
    // @ts-ignore
    this.display2Address1 = '' + JSON.stringify(this.userProfileForm.get(["address"]).get(["address1"]).value );
  }



}

