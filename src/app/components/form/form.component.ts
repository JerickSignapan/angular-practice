import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  userAccount: any = { email: 'jer', password: 'jer123' };
  message = '';
  textColor = '';

  email = new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.minLength(5),
  ]);

  password = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
  ]);

  loginForm = new FormGroup({
    email: this.email,
    password: this.password,
  });

  getData() {
    if (
      this.email.value === this.userAccount.email &&
      this.password.value === this.userAccount.password
    ) {
      this.message = 'Login success';
      this.textColor = 'green';
    } else {
      this.message = 'Login failed';
      this.textColor = 'red';
    }
    this.loginForm.reset();

    console.log(this.userAccount);
    console.log(this.loginForm.value);
  }
}
