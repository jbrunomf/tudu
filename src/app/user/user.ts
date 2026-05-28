import {Component, EventEmitter, Input, input, output, Output} from '@angular/core';
import {IUser} from './IUser';
import {Card} from '../shared/card/card';

@Component({
  selector: 'app-user',
  imports: [
    Card
  ],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  @Input({required: true}) selected = false;

  selectUser = output<IUser>();
  user = input.required<IUser>();

  get userImagePath() {
    return `users/${this.user()?.avatar}`
  }

  protected onUserClick() {
    this.selectUser.emit(this.user());
  }
}
