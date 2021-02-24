import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TaskComponent } from './components/task/task.component';
import { TasksComponent } from './components/tasks/tasks.component';



@NgModule({
  declarations: [TasksComponent, TaskComponent],
  imports: [
    SharedModule
  ],
})

export class TasksModule { }
