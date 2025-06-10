import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  welcome = 'Hello, todoapp';
  tasks = signal(['Task 1', 'Task 2', 'Task 3']);
}
