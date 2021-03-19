import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../models/users.model';
import { UsersService } from '../../../services/users.service';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: User = {
    name: '',
    age: '',
    description: ''
  };

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  createUser(): void {
    const data = {
      name: this.user.name,
      age: this.user.age,
      description: this.user.description,
    };

    this.usersService.createUser(data)
      .subscribe(
        response => {
          if(response.status === 'Success'){
            this.router.navigate(['/']);
          }else{
            console.log("Error!");
          } 
        },
        error => {
          console.log(error)
        });
  }
}
