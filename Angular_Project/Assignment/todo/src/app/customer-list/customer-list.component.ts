import { Component, OnInit } from '@angular/core';
import { TodoDataService } from './../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public catagory: string, 
    public name: string,
    public price: string,
    public tax: string,
    public url: string
  ){

  }
}

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  todos: Todo[]

  message: string

  productName:string=''

  productCatagory:string=''

  constructor(
    private todoService:TodoDataService,
    private router : Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('admin').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id) {
    console.log(`delete todo ${id}` )
    this.todoService.deleteTodo('admin', id).subscribe (
      response => {
        console.log(response);
        this.message = `Delete of Item ${id} Successful!`;
        this.refreshTodos();
      }
    )
  }

  updateTodo(id) {
    console.log(`update ${id}`)
    this.router.navigate(['todos',id])
  }

  addTodo() {
    this.router.navigate(['todos',-1])
  }

  viewProduct(id){
    this.router.navigate(['products',id])
  }

  addToCart(id){
    this.router.navigate(['cart',id])
  }

  searchByProdName(){
    if(this.productName !== ''){
      this.todoService.retrieveTodoByName(this.productName).subscribe(
        response =>{
          console.log(response);          
          this.todos = response;
        }
      );
    }else{
      this.refreshTodos();
    }    
  }

  searchByProdCatagory(){
    if(this.productCatagory !== ''){
      this.todoService.retrieveTodoByCatagory(this.productCatagory).subscribe(
        response =>{
          console.log(response);
          this.todos = response;
        }
      );
    }else{
      this.refreshTodos();
    }    
  }

  filterByPriceAsc(){
    function compare( a, b ) {
      if ( parseFloat(a.price) < parseFloat(b.price) ){
        return -1;
      }
      if ( parseFloat(a.price) > parseFloat(b.price)){
        return 1;
      }
      return 0;
    }
    this.todos = this.todos.sort(compare);
  }

  filterByPriceDesc(){
    function compare( a, b ) {
      if ( parseFloat(a.price) > parseFloat(b.price) ){
        return -1;
      }
      if ( parseFloat(a.price) < parseFloat(b.price)){
        return 1;
      }
      return 0;
    }
    this.todos = this.todos.sort(compare);
  }
}