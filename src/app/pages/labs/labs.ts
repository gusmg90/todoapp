import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  imports: [CommonModule],
  templateUrl: './labs.html',
  styleUrl: './labs.css'
})
export class Labs {
  welcome = 'Hello, todoapp';
  tasks = ['Task 1', 'Task 2', 'Task 3'];
name = 'gustavo';
age= '18';
disabled = false;
img='https://w3schools.com/howto/img_avatar.png';
person ={
  name: 'gustavo',
  age: 18,
  avatar: 'https://w3schools.com/howto/img_avatar.png'
}

}
