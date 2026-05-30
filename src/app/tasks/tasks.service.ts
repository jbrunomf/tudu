import {NewTaskData, TaskModel} from './task/task.model';
import {DUMMYTASKS} from '../DUMMY-TASKS';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class TasksService {
  tasks: TaskModel[] = [...DUMMYTASKS];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }


  getUserTasks(userId: number) {
    return this.tasks.filter(task => task.userId === userId);
  }

  addTask(task: NewTaskData, userId: number) {
    this.tasks.unshift(
      {
        id: this.tasks.length + 1,
        title: task.title,
        summary: task.summary,
        dueDate: task.dueDate,
        userId: userId
      }
    );

    this.saveTasks();
  }

  completeTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
