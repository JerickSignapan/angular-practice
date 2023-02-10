import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular-practice';
  currentItem = 'tv';

  //TO-DO-LIST

  tasks: any = [];

  addNewTask(newTask: string) {
    this.tasks.push({ id: this.tasks.length, name: newTask });
    console.log(this.tasks);
    
  }

  deleteTask(id: number) {
    console.log(id);
    this.tasks = this.tasks.filter(
      (newTask: { id: number }) => newTask.id !== id
    );
  }
}
