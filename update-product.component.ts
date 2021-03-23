import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { Products } from '../products';
import { ProductsService } from '../products.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
   productid = 0;
   productdetails:Products;
  constructor(private activeid:ActivatedRoute,
    private productservice:ProductsService) { }

  ngOnInit(): void {
    this.activeid.params.subscribe(data =>{
      this.productid =data.id;
      this.productservice.viewproduct(this.productid).subscribe(productData=>{
        this.productdetails = productData;
        console.log(this.productdetails);
      })
    })
  }
  updateproduct(form){
    const updateproduct={ "id":"form.value.id",
        "name": "form.value.product_name",
         "categoryid": "form.value.product_category",
         "description":"form.value.product_description",
         "price":"form.value.product_price",
         "is_available":"form.value.product_avaiable",
         "rating":"form.value.product_rating",
         "reviews":"form.value.product_review",
  };


    this.productservice.updateproduct(this.productid,updateproduct).subscribe(data=>{
      console.log(data)
    })
     
  }

}
