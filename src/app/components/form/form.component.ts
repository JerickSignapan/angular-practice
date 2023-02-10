import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  userAccount: any = { email: 'jer', password: 'jer123' };
  message = '';

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl(''),
  });

  get email() {
    return this.loginForm.get('email');
  }

  getData(data: NgForm) {
    if (
      this.loginForm.value.email == this.userAccount.email &&
      this.loginForm.value.email == this.userAccount.email
    ) {
      this.message = 'success';
    } else {
      this.message = 'failed';
    }
    this.loginForm.reset();

    console.log(this.userAccount);
    console.log(this.loginForm.value);
    console.log(data);
  }
}
