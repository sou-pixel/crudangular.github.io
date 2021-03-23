import { Component, OnInit } from '@angular/core';
import {ProductsService} from 'src/app/products/products.service';
import {Category} from '../category';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  categorylist :Category;
  constructor(private productservice:ProductsService) { }

  ngOnInit(): void {
    this.productservice.getCategory().subscribe(data =>{console.log(data);
      this.categorylist = data;

    });

  }

}
