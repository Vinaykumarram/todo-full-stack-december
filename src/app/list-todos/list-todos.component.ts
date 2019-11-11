import { Component, OnInit } from '@angular/core';

export class todo {

  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    // { id: 1, description: 'Learn To Dance' },
    // { id: 2, description: 'Learn Angular' },
    // { id: 3, description: 'Learn Java' },

    new todo ( 1,'Learn To Dance' , false,new Date),
    new todo ( 2,'Learn Angular' , true,new Date),
    new todo ( 3,'Learn Java' , false,new Date),


  ]
  constructor() { }

  ngOnInit() {
  }

}
