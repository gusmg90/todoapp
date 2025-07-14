import { Component, inject, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { signal, computed, effect } from '@angular/core';
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

    deleteTask(id:number)
    {
      this.tasks.update((tasks) => tasks.filter((tasks) => tasks.id !== id));
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



filter = signal('all');
changeFilter(filter: string ){
  this.filter.set(filter);
}

tasksByFilter= computed(() => {
const filter = this.filter();
const tasks = this.tasks();
if(filter === 'pending'){
  return tasks.filter(tasks => !tasks.completed);

} if(filter === 'completed'){
  return tasks.filter(tasks => tasks.completed);
}
return tasks;

})

injector =  inject(Injector);
// constructor(){
//   effect (() => {
//     const tasks = this.tasks();
//     console.log(tasks);
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//   },{injector: this.injector})
//   }
  ngOnInit(){
    const storage = localStorage.getItem('tasks');
    if(storage){
      const tasks = JSON.parse(storage);
      this.tasks.set(tasks);
    }
    this.trackTasks();
  }

trackTasks(){ // para trackear si ya hizo la validacion de datos en storage
   effect (() => {
    const tasks = this.tasks();
    console.log(tasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, {injector: this.injector})

}


}



