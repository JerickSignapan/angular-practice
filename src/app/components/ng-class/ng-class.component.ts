import { Component } from '@angular/core';
import { Inaruto } from 'src/app/interface';


@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss'],
})
export class NgClassComponent {

  characters: Inaruto[] = [
    {
      name: 'Naruto',
      isStrong: true,
    },
    {
      name: 'kapal-kilay',
      isStrong: false,
    },
  ];

  constructor() {}
}
