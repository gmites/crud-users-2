import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/users.model';
import { UsersResponse } from '../../../models/responseUsers.model';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  users?: User[];
  usersResponse?: UsersResponse;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.retrieveUsers();
  }

  retrieveUsers(): void {
    this.usersService.getAllUsers()
      .subscribe(
        (response) => {
          if(response.status === 'Success'){
            this.users = response.data;
          }else{
            console.log("Error!");
          }
        },
        error => {
          console.log(error);
        });
  }



}
