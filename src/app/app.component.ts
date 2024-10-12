import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'to-do-list-app';
}
<!-- src/app/app.component.html -->
<div class="app">
  <app-task-form (taskUpdated)="loadTasks()"></app-task-form>
  <app-task-list></app-task-list>
</div>
