import { Component } from '@angular/core';
import { Task } from './task';
import {
  faCheck,
  faX,
  faRotateRight,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'ToDo List';
  taskText: string = '';
  checkmarkIcon: IconDefinition = faCheck;
  deleteIcon: IconDefinition = faX;
  redoIcon: IconDefinition = faRotateRight;
  filteredText: string = '';
  allTasksFinished: boolean = false;

  tasks: Task[] = [
    {
      task: 'Buy Milk',
      completed: false,
    },
    {
      task: 'Pick up medicine',
      completed: true,
    },
    {
      task: 'Take Rocket to groomer',
      completed: false,
    },
  ];

  addTask(): void {
    this.tasks.push({
      task: this.taskText,
      completed: false,
    });
    this.taskText = '';
  }

  removeTask(index: number): void {
    this.tasks.splice(index, 1);
  }

  filteredTaskList(): Task[] {
    if (this.filteredText != '')
      return this.tasks.filter((t) =>
        t.task.toLowerCase().includes(this.filteredText.toLowerCase())
      );
    else return this.tasks;
  }

  allTasksComplete() {
    let result: boolean = true;
    this.tasks.forEach((task) => {
      if (task.completed == false) result = false;
    });
    this.allTasksFinished = result;
  }

  completeTask(t: Task): void {
    t.completed = !t.completed;
    this.allTasksComplete();
  }
}
