import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  imports: [],
  templateUrl: './labs.html',
  styleUrl: './labs.css'
})
export class Labs {
  welcome = 'Hello, todoapp';
  tasks = ['Task 1', 'Task 2', 'Task 3'];
}
