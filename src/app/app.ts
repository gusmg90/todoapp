import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'todoapp';
  welcome = 'Hello, todoapp';
  tasks = ['Task 1', 'Task 2', 'Task 3'];
}
