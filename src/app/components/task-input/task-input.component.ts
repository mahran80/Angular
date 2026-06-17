import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-input.component.html'
})
export class TaskInputComponent {
  
  taskName: string = '';

  
  @Output() onTaskAdded = new EventEmitter<string>();

  sendToParent() {
      if (this.taskName !== '') {
      this.onTaskAdded.emit(this.taskName);
      this.taskName = '';
    }
  }
}