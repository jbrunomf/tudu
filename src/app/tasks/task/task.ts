import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IUser} from '../../user/IUser';
import {TaskModel} from './task.model';
import {DatePipe} from '@angular/common';


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
  @Output() complete = new EventEmitter<number>();


  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
