import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ProductsService } from '../products.service';
import { Products } from '../products';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  productid=0;
  productdetails:Products;
  constructor(private activeRoute:ActivatedRoute,
    private productservice:ProductsService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(data => {
      this.productid = data.id;
      this.productservice.deleteproduct(this.productid).subscribe(Deleteproductdata=>{
        this.productdetails = Deleteproductdata;
      });
    });
  }
}
