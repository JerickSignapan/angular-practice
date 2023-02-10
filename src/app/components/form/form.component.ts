import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl(''),
  });

  get email() {
    return this.loginForm.get('email');
  }

  getData(data: NgForm) {
    console.log(data);
  }
}
