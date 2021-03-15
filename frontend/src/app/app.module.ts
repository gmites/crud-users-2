import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { EditUsersComponent } from './components/edit-users/edit-users.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { CreateUserComponent } from './components/create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    EditUsersComponent,
    EditUserComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
