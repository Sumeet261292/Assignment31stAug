import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  customerName:string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.customerName = this.route.snapshot.params['name'];
    this.customerName = this.customerName.charAt(0).toUpperCase() + this.customerName.slice(1);
  }

}
