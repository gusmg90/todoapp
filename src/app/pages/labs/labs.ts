import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { core } from '@angular/compiler';
import { signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-labs',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './labs.html',
  styleUrl: './labs.css'
})
export class Labs {
  welcome = 'Hello, todoapp';
  tasks = signal(['Task 1', 'Task 2', 'Task 3']);
name = signal('gustavo');
age= '18';
disabled = false;
img='https://w3schools.com/howto/img_avatar.png';


person =signal({
  name: 'gustavo',
  age: 18,
  avatar: 'https://w3schools.com/howto/img_avatar.png'
})

saludar(){
  console.log('hola');
  alert('hola');
} 
changeHandleredad(event: Event){
  const input = event.target as HTMLInputElement;
  const newValue = input.value;
  this.person.update(prevState => {
    return {
      ...prevState,
      age: parseInt(newValue)
    }
  });
  //this.person().age = Number(newValue) as unknown as number; //set(newValue);
}


changeHandlerAge(event: Event){
  const input = event.target as HTMLInputElement;
  const newValue = input.value;
  this.person.update(prevState => {
    return {
      ...prevState,
      age: parseInt(newValue)
    }
  })
}

changeHandler(event: Event){
  const input = event.target as HTMLInputElement;
  const newValue = input.value;
  this.person.update(prevState => {
    return {
      ...prevState,
      name: newValue
    }
  })
}
keydownHandler(event: KeyboardEvent){
  const input = event.target as HTMLInputElement;
  console.log(input.value);
}

colorCtrl = new FormControl('');
tamCtrl = new FormControl(50,{
  nonNullable: true,
} );



nameCtrl = new FormControl('',{
  nonNullable: true,
  validators: [
    Validators.required, 
    Validators.minLength(3),
    
  ]
} );






constructor(){
  this.colorCtrl.valueChanges.subscribe(value=> {console.log(value);
  })
}


}
