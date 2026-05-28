import {Component, Input} from '@angular/core';
import {IUser} from '../../user/IUser';
import {TaskModel} from './task.model';


@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({required: true}) task!: TaskModel;
  @Input() user!: IUser;
}
