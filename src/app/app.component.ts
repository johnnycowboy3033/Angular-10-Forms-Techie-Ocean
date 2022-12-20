import { Component } from '@angular/core';
import {FormArray, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Tutorial';
  siteName = 'Angular 10 Forms - Techie Ocean';
  displayForm = '';
  mobile1 = '';
  counter = 0;

  ngOnInit(): void {
  }

  constructor( private fb:FormBuilder) {
  }

  userProfileForm = this.fb.group({
    mobiles: this.fb.array([
        this.fb.control('')
    ])
  });

  get mobiles(){
    return this.userProfileForm.get('mobiles') as FormArray;
  }


  addNewMobile(){
    this.mobiles.push(this.fb.control(''));
  }


  onSubmit(){
    // @ts-ignore
    this.displayForm = '' + JSON.stringify(this.userProfileForm.value);

    // @ts-ignore
    this.mobile1 = ' ' + this.userProfileForm.get(['mobiles','0']).value;



  }

  logMobiles(){
    for(let mob of this.mobiles.controls){
      // @ts-ignore
      console.log("Mobile " + this.counter + " : " + this.userProfileForm.get(['mobiles',this.counter]).value);
      this.counter = this.counter + 1;
    }
  }

}

