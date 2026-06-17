import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../../interfaces/itask';
import { NgClass,NgStyle} from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgClass,NgStyle],
  templateUrl: './task-list.component.html'
})
export class TaskListComponent {
  //take the tasks from the parent
  @Input() allTasks: ITask[] = [];

  //send the id to the parent
  @Output() onTaskChecked = new EventEmitter<number>();
  //emmiter method
  markAsDone(taskId: number) {
    this.onTaskChecked.emit(taskId);
  }
}