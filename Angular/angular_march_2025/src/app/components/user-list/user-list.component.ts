import { Component } from '@angular/core';
// import * as data from './users.json';
import usersData from './users';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-list',
  imports: [
    RouterLink
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  // users = (data as any).default; //default is the key for the data
  users = usersData;
}
