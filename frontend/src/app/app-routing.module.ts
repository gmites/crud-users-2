import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { CrudBoardComponent } from './components/crud-board/crud-board.component';

const routes: Routes = [
  {path:'', component:CrudBoardComponent},
  {path:'users', component:UsersComponent},
  {path:'create', component: CreateUserComponent},
  {path:'edit/:id', component: EditUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
