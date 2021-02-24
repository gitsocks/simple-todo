import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/models/task.model';
import { TodoService } from 'src/app/shared/services/todo/todo.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input()
  task: Task;

  constructor(private todo: TodoService) { }

  ngOnInit() {
 
  }

  updateTask() {
    this.todo.update(this.task);
  }

  completeTask() {
    this.task.completed = true;
    this.todo.update(this.task);
  }

  removeTask() {
    this.todo.remove(this.task);
  }

  taskOverDue() {
    if (this.task.dateDue) return new Date(this.task.dateDue).getTime() < this.getTodaysDate().getTime();
  }

  getTodaysDate() {
    return new Date();
  }

}
