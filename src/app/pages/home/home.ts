import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  welcome = 'Hello, todoapp';
  tasks = ['Task 1', 'Task 2', 'Task 3'];
}
