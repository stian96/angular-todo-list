import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-todo-list';
  showAll = false;

  showAllTodos() {
    this.showAll = !this.showAll;
  }
}
