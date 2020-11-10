import { Component } from '@angular/core';

const users = [
  {
    firstName: 'First Name 1',
    lastName: 'Last Name 1',
    age: 31
  },
  {
    firstName: 'First Name 2',
    lastName: 'Last Name 2',
    age: 32
  },
  {
    firstName: 'First Name 3',
    lastName: 'Last Name 3',
    age: 33
  },
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  welcomeMessage = 'Hello!';

  nameInputValue = 'Test Test';

  isVisible = false;
  users = users;

  nameInputBtnClickHandler(data: { inputEl: HTMLInputElement}):void {
    console.log(data.inputEl.value);
  }

  constructor(){

  }

  toggleHandler():void {
    this.isVisible = !this.isVisible;
  }

}
