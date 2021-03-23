import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private productservice:ProductsService) { }

  ngOnInit(): void {
  }
  addNewProduct(form){
    
   
    let newProduct =
         { "id":"form.value.id",
        "name": "form.value.product_name",
         "categoryid": "form.value.product_category",
         "description":"form.value.product_description",
         "price":"form.value.product_price",
         "is_available":"form.value.product_avaiable",
         "rating":"form.value.product_rating",
         "reviews":"form.value.product_review",
  };
   console.log(newProduct)
  this.productservice.createproduct(newProduct).subscribe(data=>{
      console.log(data);
  })
  }
}
