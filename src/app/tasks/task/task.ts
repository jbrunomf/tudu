import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IUser} from '../../user/IUser';
import {TaskModel} from './task.model';
import {DatePipe} from '@angular/common';
import {TasksService} from '../tasks.service';


@Component({
  selector: 'app-task',
  imports: [
    DatePipe
  ],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({required: true}) task!: TaskModel;
  @Input() user!: IUser;

  constructor(private service: TasksService) {
  }


  onCompleteTask() {
    this.service.completeTask(this.task.id);
  }
}
