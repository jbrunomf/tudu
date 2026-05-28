import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../user/IUser';
import {Task} from './task/task';
import {DUMMYTASKS} from '../DUMMY-TASKS';
import {TaskModel} from './task/task.model';



@Component({
  selector: 'app-tasks',
  imports: [
    Task
  ],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})


export class Tasks {
  @Input() user?: IUser;
  tasks: TaskModel[] = [...DUMMYTASKS];

  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.user?.id);
  }
}
