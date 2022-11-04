import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  pass!: FormControl


  constructor() {}

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
      (/^\d+$/.test(this.pass.value)||
      /^[a-zA-Z]+$/.test(this.pass.value)||
      /^[^a-zA-Z\d]+$/.test(this.pass.value)))
    {
      this.strong = false;
      this.medium = false;
      this.easy = true;
    }
    else if (this.pass.value.length >= 8 &&
      /^[A-Za-z0\d]*$/.test(this.pass.value) ||
      (/^[^a-zA-Z]+$/.test(this.pass.value) ||
        /^\D+$/.test(this.pass.value)))
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

  }

}

