import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductsService} from 'src/app/products/products.service';
import {Products} from 'src/app/products/products';

@Component({
  selector: 'app-view-all-product-by-category',
  templateUrl: './view-all-product-by-category.component.html',
  styleUrls: ['./view-all-product-by-category.component.css']
})
export class ViewAllProductByCategoryComponent implements OnInit {
    serachcategory=0;
   productlist:Products;
  constructor(private activeroute:ActivatedRoute,
    private productservice:ProductsService) { }

  ngOnInit(): void {
    this.activeroute.params.subscribe(data => {
     this.serachcategory = data.id;

     this.productservice.searchcategoryproduct(this.serachcategory).subscribe(categoryData=>{
         this.productlist= categoryData;
     })
    })
  }

}
