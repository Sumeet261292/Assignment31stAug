import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  id:number; 
  message:string = 'Product added to cart';
  total:number;
  customerName:string='';
  customerAddress:string='';
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

  checkout(){
    if(this.customerName !== '')
    this.router.navigate(['checkout',this.customerName])
    else
    this.message = 'Customer name cannot be blank'
  }

}
