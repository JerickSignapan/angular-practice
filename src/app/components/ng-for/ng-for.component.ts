import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss'],
})
export class NgForComponent {
  user = [
    {
      name: 'John',
      age: 34,
      email: 'john@gmail.com',
    },
    {
      name: 'Peter',
      age: 35,
      email: 'peter@gmail.com',
    },
  ];
}
