import {Component, Injectable, Input} from '@angular/core';
import {IUser} from '../user/IUser';
import {Task} from './task/task';
import {NewTask} from './new-task/new-task';
import {TasksService} from './tasks.service';
import {NewTaskData} from './task/task.model';


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
    this.service.tasks = this.service.tasks.filter(task => task.id !== id);
  }

  protected onAddTask(task: NewTaskData) {
    this.service.tasks.unshift(
      {
        id: this.service.tasks.length + 1,
        title: task.title,
        summary: task.summary,
        dueDate: task.dueDate,
        userId: this.user?.id!
      }
    )
    this.isAddingTask = false;
  }

}
