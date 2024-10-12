// src/app/task-form/task-form.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  @Input() task: Task = new Task();
  @Output() taskUpdated = new EventEmitter<void>();

  constructor(private taskService: TaskService) {}

  saveTask(): void {
    if (this.task.id) {
      this.taskService.updateTask(this.task).subscribe(() => {
        this.taskUpdated.emit();
      });
    } else {
      this.taskService.addTask(this.task).subscribe(() => {
        this.taskUpdated.emit();
      });
    }
  }
}

