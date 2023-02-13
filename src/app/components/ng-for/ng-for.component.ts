import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IStudent } from 'src/app/interface';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss'],
})
export class NgForComponent {
  students: IStudent[] = [];

  name = new FormControl('');
  yearLevel = new FormControl('');
  course = new FormControl('');
  id = new FormControl('');

  studentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      name: this.name,
      yearLevel: this.yearLevel,
      course: this.course,
      id: this.id,
    });
  }

  onAdd() {
    this.students.push(this.studentForm.value);
    console.log(this.studentForm.value);
    // this.students.Name = this.name.value;
    // this.students.YearLevel = this.yearLevel.value;
    // this.students.Course = this.course.value;
    this.studentForm.reset();
  }

  onDelete(student: IStudent) {
    this.students = this.students.filter((s) => s.id !== student.id);
    console.log(student);
  }
}
