import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss'],
})
export class NgForComponent {
  students: any = [
    {
      name: 'John',
      yearLevel: '3rd year',
      course: 'BSIT',
    },
    {
      name: 'jer',
      yearLevel: '1st year',
      course: 'BSED',
    },
  ];
}
