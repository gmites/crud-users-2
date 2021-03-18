import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../models/users.model';
import { UserResponse } from '../../../models/responseUser.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  
  currentUser?: User = {
    name: '',
    age: '',
    description: ''
  };

  id?:string;

  constructor(private usersService: UsersService,
     private route: ActivatedRoute,
      private router: Router
  ) { }

  ngOnInit(): void {
    this.getUser(this.route.snapshot.params.id)
  }

  getUser(id: string): void {
    this.usersService.getUser(id)
      .subscribe(
        response => {
          if(response.status === 'Success'){
            this.currentUser = response.data
          }else{
            console.log("Error!");
          }
        },
        error => {
          console.log(error);
        });
  }

  updateUser(): void {
      this.usersService.updateUser(this.route.snapshot.params.id, this.currentUser)
      .subscribe(
        response => {
          if(response.status === 'Success'){
            console.log("Updated!");
          }else{
            console.log("Error!");
          }
        },
        error => {
          console.log(error);
        });
  }

}
