import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from "@angular/forms";



@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  pass!: FormControl

  constructor() {
  }
  letters = false;
  easy = false;
  medium = false;
  strong = false;

  ngOnInit(): void {
    this.pass = new FormControl('');
  }

  Submit() {
    if(this.pass.value.length < 8){
      this.letters = true;
    }
    else{this.letters = false;}



    if( this.pass.value.length >= 8 &&
      (/^[0-9]+$/.test(this.pass.value)||
      /^[a-zA-Z]+$/.test(this.pass.value)||
      /^[^a-zA-Z0-9]+$/.test(this.pass.value)))
    {
      this.strong = false;
      this.easy = true;
      this.medium = false;
    }
    else if (this.pass.value.length >= 8 &&
      /^[A-Za-z0-9]*$/.test(this.pass.value) ||
      (/^[^a-zA-Z]+$/.test(this.pass.value) ||
        /^[^0-9]+$/.test(this.pass.value)))
    {
      this.strong = false;
      this.easy = false;
      this.medium = true;
    }
    else {
      this.easy = false;
      this.medium = false;
      this.strong = true;
    }






    console.log(/^\d+$/.test(this.pass.value))
  }
}

