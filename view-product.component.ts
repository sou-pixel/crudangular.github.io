import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }from '@angular/router';
import { Products } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  productid=0;
  productdetails:Products;

  constructor(private activatedRoute:ActivatedRoute,
       private productservice:ProductsService) { }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(data=>{
        this.productid = data.id;
      })
    this.productservice.viewproduct(this.productid).subscribe(productdata => {
      this.productdetails = productdata;
    });
  }

}
