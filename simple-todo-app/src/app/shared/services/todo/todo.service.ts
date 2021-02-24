import { Injectable } from '@angular/core';
import { Task } from 'src/app/shared/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  tasks: Task[];

  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  add(task: Task) {
    if (!this.tasks) this.tasks = []
    task.id = this.tasks.length + 1;
    task.dateCreated = new Date();
    this.tasks.push(task);
    this.save();
  }

  update(task: Task) {
    const position = task.id - 1;
    this.tasks[position] = task;
    this.save();
  }

  remove(task: Task) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
    this.updateIds();
    this.save();
  }

  private save() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  private updateIds() {
    for (let i = 0; i < this.tasks.length; i++) {
      this.tasks[i].id = i + 1;
    }
  }
}
