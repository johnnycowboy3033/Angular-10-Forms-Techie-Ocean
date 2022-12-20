import { Component } from '@angular/core';
import { FormBuilder} from "@angular/forms";
import { Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Tutorial';
  siteName = 'Angular 10 Forms - Techie Ocean';
  displayForm = '';
  firstName = '' ;
  lastName = '';
  address1 = '';
  address2 = '';



  ngOnInit(): void {
  }

  constructor( private fb:FormBuilder) {
  }

  userProfileForm = this.fb.group({
    firstName: ['', Validators.required ],
    lastName:  [''],
    age:  [''],
    email:  [''],
    address : this.fb.group({
      address1: [''],
      address2: [''],
      state: [''],
      zip: [''],
    })
  });


  onSubmit(){
    // @ts-ignore
    this.displayForm = '' + JSON.stringify(this.userProfileForm.value);

    this.firstName = '' + this.userProfileForm.controls['firstName'].value;

    // @ts-ignore
    this.lastName = '' + this.userProfileForm.get('lastName').value;

    // @ts-ignore
    this.address1 = '' + this.userProfileForm.get(['address','address1']).value;

    // @ts-ignore
    this.address2 = '' + this.userProfileForm.get(['address']).get(['address2']).value;
  }

}

