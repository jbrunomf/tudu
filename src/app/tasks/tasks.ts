import {Component, Injectable, Input} from '@angular/core';
import {IUser} from '../user/IUser';
import {Task} from './task/task';
import {NewTask} from './new-task/new-task';
import {TasksService} from './tasks.service';
import {NewTaskData} from './task/task.model';
import {getAnalyticsUserId} from '@angular/cli/src/analytics/analytics';


@Component({
  selector: 'app-tasks',
  imports: [
    Task,
    NewTask
  ],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})


export class Tasks {
  @Input() user: IUser | undefined;
  isAddingTask: boolean = false;

  constructor(private service: TasksService) {
  }

  get selectedUserTasks() {
    return this.service.getUserTasks(this.user?.id ?? 0);
  }

  protected onStartAddTask() {
    this.isAddingTask = true;
  }

  protected onCancelAddTask() {
    this.isAddingTask = false;
  }

  onTaskComplete(id: number) {
    this.service.completeTask(id)
  }
}
