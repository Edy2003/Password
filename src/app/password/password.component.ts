import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  pass!: FormControl
  private subscr: Subscription;
  constructor() {
    this.pass = new FormControl('');
    this.subscr = new Subscription();
  }

  letters = false;
  easy = false;
  medium = false;
  strong = false;

  ngOnInit(): void {
    this.subscr = this.pass.valueChanges.subscribe(get=>{this.submit()})
  }

  submit() {
    this.letters = this.pass.value.length < 8;

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
  ngOnDestroy(){
    this.subscr.unsubscribe();
  }
}

