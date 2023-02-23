import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientService } from 'app/service/http-client.service';

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.scss']
})
export class TodoUpdateComponent {
  id!:number
  title!:string;

  constructor(private service:HttpClientService, private router:Router, private route:ActivatedRoute) {
    // this.id = this.router.getCurrentNavigation()?.extras.state?.['id'];
  }
  ngOnInit(){
    // this.route.queryParams.subscribe({
    //   next : params => {
    //     console.log(params);
    //     this.id=params['id'];
    //     this.title=params['title'];
    //   }
    // })
    this.id=history.state['id']
    console.log(this.id);
    console.log(this.title);
  }
  

  save() {
    this.service.updateTodo(this.id, this.title).subscribe({
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
