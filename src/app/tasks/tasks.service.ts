import {NewTaskData, TaskModel} from './task/task.model';
import {DUMMYTASKS} from '../DUMMY-TASKS';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class TasksService {
  tasks: TaskModel[] = [...DUMMYTASKS];

  getUserTasks(userId: number) {
    return this.tasks.filter(task => task.userId === userId);
  }


  protected addTask(task: NewTaskData, userId: number) {
    this.tasks.unshift(
      {
        id: this.tasks.length + 1,
        title: task.title,
        summary: task.summary,
        dueDate: task.dueDate,
        userId: userId
      }
    )
  }

  removeTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
