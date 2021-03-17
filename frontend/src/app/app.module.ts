import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { HeaderComponent } from './header/header.component';
import { CrudBoardComponent } from './components/crud-board/crud-board.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    EditUserComponent,
    CreateUserComponent,
    HeaderComponent,
    CrudBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
