import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Header} from './header/header';
import {User} from './user/user';
import {DUMMY_USERS} from './DUMMY-USERS';
import {IUser} from './user/IUser';
import {Tasks} from './tasks/tasks';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tudu');

  users: IUser[] = [...DUMMY_USERS];
  selectedUser: IUser | undefined;

  protected onUserSelect($event: IUser) {
    this.selectedUser = $event;
    console.log('user selected', $event);
  }
}

