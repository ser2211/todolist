import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class TodoList {

  newTodo: string;
  todolist: any;
  todoObj: any;

  constructor() {
    this.newTodo = '';
    this.todolist = [];
  }

  addTodo(event) {
    this.todoObj = {
      newTodo: this.newTodo,
      completed: false
    }
    this.todolist.push(this.todoObj);
    this.newTodo = '';
    event.preventDefault();
  }

  deleteTodo(index) {
    this.todolist.splice(index, 1);
  }

  deleteSelectedTodos() {
    //need ES5 to reverse loop in order to splice by index
    for(var i=(this.todolist.length -1); i > -1; i--) {
      if(this.todolist[i].completed) {
        this.todolist.splice(i, 1);
      }
    }
  }

}