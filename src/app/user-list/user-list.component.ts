import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  public users: string[];

   s1: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {
    // il faut initialiser les users ici avec le service
    this.s1 = this.userService.users.subscribe( (users: string[]) =>
     (this.users = users));
  }

  ngOnDestroy() {
    this.s1.unsubscribe();
  }

}
