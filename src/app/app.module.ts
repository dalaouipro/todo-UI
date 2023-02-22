import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { FormsModule } from '@angular/forms';
import { TodoUpdateComponent } from './todo-update/todo-update.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoCreateComponent,
    TodoUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
