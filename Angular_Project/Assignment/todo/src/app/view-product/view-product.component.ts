import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  id:number; 
  total:number;
  todo:Todo
  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id,'','','','','assets/Images/error.jpg');
    this.total = 0;
    this.todoService.retrieveTodo('admin',this.id).subscribe(
      data => {
        this.todo = data
        this.total = parseFloat(data.price) + parseFloat(data.price)*parseFloat(data.tax)/100;
      }
    );    
    
  }

  addToCart(id){
    this.router.navigate(['cart',id])
  }
}
