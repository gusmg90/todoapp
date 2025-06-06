import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  welcome = 'Hello, todoapp';
  tasks = ['Task 1', 'Task 2', 'Task 3'];
}
