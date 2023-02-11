import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Output() tasks = new EventEmitter<string>();

  addNewTask(value: string) {
    this.tasks.emit(value);
  }
}
