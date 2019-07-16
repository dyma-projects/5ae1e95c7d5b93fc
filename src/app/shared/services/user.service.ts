import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  userList: string[] = [];

  constructor() { }

  addUser(user: string) {

  this.userList.push(user);
  this.users.next( this.userList );

  }
}
