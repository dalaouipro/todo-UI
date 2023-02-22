import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService} from 'app/service/http-client.service';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.scss']
})
export class TodoCreateComponent implements OnInit {
  title!:string;

  constructor(private service:HttpClientService, private router:Router) {}
  ngOnInit(){}

  save() {
    this.service.createTodo(this.title).subscribe({
      next : data => {
        console.log(data);
        this.router.navigate(['/todos']);
      },
      error : err =>console.log(err), 
    })
  }

  onSubmit() {
    this.save();
  }
  
}
