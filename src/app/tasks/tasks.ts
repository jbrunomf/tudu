import {Component, Input} from '@angular/core';
import {IUser} from '../user/IUser';
import {Task} from './task/task';
import {DUMMYTASKS} from '../DUMMY-TASKS';
import {NewTaskData, TaskModel} from './task/task.model';
import {NewTask} from './new-task/new-task';


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
  @Input() user?: IUser;
  tasks: TaskModel[] = [...DUMMYTASKS];

  isAddingTask: boolean = false;

  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.user?.id);
  }

  onTaskComplete(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  protected onStartAddTask() {
    this.isAddingTask = true;
  }

  protected onCancelAddTask() {
    this.isAddingTask = false;
  }

  protected onAddTask(task: NewTaskData) {
    this.tasks.unshift(
      {
        id: this.tasks.length + 1,
        title: task.title,
        summary: task.summary,
        dueDate: task.dueDate,
        userId: this.user?.id!
      }
    )
    this.isAddingTask = false;
  }
}
