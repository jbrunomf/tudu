import {Component, EventEmitter, Input, input, output, Output} from '@angular/core';
import {IUser} from './IUser';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  // @Input({required: true}) user!: IUser;

  // @Output() selectUser = new EventEmitter<number>();

  selectUser = output<number>();
  user = input.required<IUser>();

  get userImagePath() {
    return `users/${this.user().avatar}`
  }

  protected onUserClick() {
    this.selectUser.emit(this.user().id);
  }
}
