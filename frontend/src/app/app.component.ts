import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ TodoService ]
})
export class AppComponent {
  title = 'app';
  todos: Todo[];

  constructor(private todoService: TodoService) { }

  getTodos(): void {
    this.todoService.getTodos().then(todos => this.todos = todos);
  }

  ngOnInit(): void {
    this.getTodos();
  }
}
