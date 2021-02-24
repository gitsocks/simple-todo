import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Task } from 'src/app/shared/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  tasks: Task[];

  constructor(private fire: AngularFirestore) {
    // this.tasks = JSON.parse(localStorage.getItem('tasks'));
    this.fire.collection('tasks').valueChanges({ idField: 'id' }).subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }

  add(task: Task) {
    this.fire.collection('tasks').add(task);
  }

  update(task: Task) {
    this.fire.collection('tasks').doc(task.id).set(task);
  }

  remove(task: Task) {
    this.fire.collection('tasks').doc(task.id).delete();
  }

}
