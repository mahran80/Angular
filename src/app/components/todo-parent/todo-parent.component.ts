import { Component } from '@angular/core';
import { TaskInputComponent } from '../task-input/task-input.component';
import { TaskListComponent } from '../task-list/task-list.component';
import { ITask } from '../../interfaces/itask';

@Component({
  selector: 'app-todo-parent',
  standalone: true,
  imports: [TaskInputComponent, TaskListComponent],
  templateUrl: './todo-parent.component.html'
})
export class TodoParentComponent {
  tasksArray: ITask[] = [];
  doneCount: number = 0;

//receive the task-input component
  receiveNewTask(taskString: string) {
    let newTask: ITask = {
      id: Date.now(),
      name: taskString,
      isDone: false
    };
    this.tasksArray.push(newTask);
  }
//method (done or not done)
  updateTaskStatus(taskId: number) {
    for (let task of this.tasksArray) {
      if (task.id === taskId) {
        task.isDone = !task.isDone;
      }
    }
    this.calculateDoneTasks();
  }

  //helper method to calculate the number
  calculateDoneTasks() {
    this.doneCount = 0;
    for (let task of this.tasksArray) {
      if (task.isDone === true) {
        this.doneCount++;
      }
    }
  }
}