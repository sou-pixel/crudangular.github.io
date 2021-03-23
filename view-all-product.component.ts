import { Component, OnInit } from '@angular/core';
import {ProductsService} from 'src/app/products/products.service';
import {Products} from 'src/app/products/products';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {
   productlist:Products;
  constructor(private productservice:ProductsService) { }

  ngOnInit(): void {
    this.productservice.getAllproducts().subscribe(data=>{
      this.productlist = data;
    })
  }

}
