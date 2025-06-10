import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { signal } from '@angular/core';
import { Task } from './../../models/task.model';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  welcome = 'Hello, todoapp';
  tasks = signal<Task[]>([
    {
      id: Date.now(),
      title: 'Task 1',
      completed: false 
    },
    {
      id: Date.now(),
      title: 'Task 2',
      completed: false 
    },
    {
      id: Date.now(),
      title: 'Task 3',
      completed: false  
     }
    ]);

    changeHandler(event: Event) {
      const input = event.target as HTMLInputElement;
      const newTask = {
        id: Date.now(),
        title: input.value,
        completed: false
      }
      console.log(newTask);
      this.tasks.update((tasks) => [...this.tasks(), newTask]);
      input.value = '';
    }
  }

