import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/models/task.model';
import { TodoService } from 'src/app/shared/services/todo/todo.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {

  newTask: Task = { id: '', task: '', dateCreated: null, completed: false};
  showCompleted: boolean = false;

  constructor(private todo: TodoService) { }

  ngOnInit() { }

  getTasks() {
    if (this.todo.tasks) return this.todo.tasks.filter(task => task.completed == this.showCompleted);
  }

  addTask(event) {
    if (event.key === "Enter") {
      console.log(this.newTask.dateDue)
      this.todo.add(this.newTask);
      this.newTask = { id: '', task: '', dateCreated: null, completed: false};
    }
  }

  toggleCompleted() {
    this.showCompleted = !this.showCompleted;
    this.getTasks();
  }



}
