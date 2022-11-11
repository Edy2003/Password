import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  public pass: FormControl = new FormControl('');
  private subscr: Subscription = this.pass.valueChanges.subscribe(get=>{this.submit()});

  public letters = false;
  public easy = false;
  public medium = false;
  public strong = false;

  constructor() {  }

  ngOnInit(): void {  }

  private ngOnDestroy(){
    this.subscr.unsubscribe();
  }

 private submit() {
    this.letters = this.pass.value.length < 8;

    if(
      (/^\d+$/.test(this.pass.value)|| /^[a-zA-Z]+$/.test(this.pass.value)|| /^[^a-zA-Z\d]+$/.test(this.pass.value))
      && this.pass.value.length >= 8
    ) {
      this.strong = false;
      this.medium = false;
      this.easy = true;
    } else if (
      (/^[A-Za-z0\d]*$/.test(this.pass.value) || /^[^a-zA-Z]+$/.test(this.pass.value) || /^\D+$/.test(this.pass.value))
      && this.pass.value.length >= 8
    ) {
      this.strong = false;
      this.easy = false;
      this.medium = true;
    } else {
      this.easy = false;
      this.medium = false;
      this.strong = true;
    }

  }

}

