import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { signal } from '@angular/core';
import { Task } from './../../models/task.model';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  welcome = 'Hello, todoapp';
  tasks = signal<Task[]>([
    {
      id: Date.now(),
      title: 'Task 1',
      completed: false, 
      editing: false
    },
    {
      id: Date.now(),
      title: 'Task 2',
      completed: false,
       editing: false 
    },
    {
      id: Date.now(),
      title: 'Task 3',
      completed: false,
       editing: false  
     }
    ]);

    changeHandler(){ 
      if(this.newTaskCtl.valid){
        const value = this.newTaskCtl.value.trim();
        if(value !== '')
        {
        this.addTask(value);
        this.newTaskCtl.reset();
        }
      }
    }

    addTask(Title:string)
    {
      const newTask = {
        id: Date.now(),
        title: Title,
        completed: false
      }
      this.tasks.update((prevState) => [...prevState, newTask]);
    }

    deleteTask(index:number)
    {
      this.tasks.update((tasks) => tasks.filter((tasks,position) => position !== index));
    }

    updateTask(index:number){
      this.tasks.update((tasks) => {
        return tasks.map((task, position) => {
          if (position === index) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task;
        })
      })
     
    }
  completed = new FormControl();
  
  newTaskCtl=new FormControl('',{
  nonNullable: true,
  validators:[
    Validators.required,
    Validators.minLength(3),
    Validators.pattern('^\\S.*$'),
  ]
});

updateTastkEditingMode(index:number){
  this.tasks.update((prevState) => {
    return prevState.map((task, position) => {
      if (position === index) {
      return {
        ...task,
        editing: !task.editing
      }
    }
    return {...task,
    editing:false
    }  
  })
  })
}

updateTastkText(index:number, event: Event){
  this.tasks.update((prevState) => {
    return prevState.map((task, position) => {
      if (position === index) {
      return {
        ...task,
        title : (event.target as HTMLInputElement).value,
        editing: !task.editing
      }
    }
    return task
  })
  })
}

  }



