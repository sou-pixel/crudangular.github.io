import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Products} from './products';
import { Observable } from 'rxjs';
import { Category } from '../site-framwork/category';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient:HttpClient) { }

  getAllproducts():Observable<Products>{
    const producturl = "http://localhost:3000/products";

    return this.httpClient.get<Products>(producturl);

  }
  getCategory():Observable<Category>{
    const categoryUrl ="http://localhost:3000/category";
    return this.httpClient.get<Category>(categoryUrl);
  }

  createproduct(productbody):Observable<Products>{
    const producturl = "http://localhost:3000/products" ;

     return  this.httpClient.post<Products>(producturl, productbody);
  }

  viewproduct(productid):Observable<Products>{
    const producturl = "http://localhost:3000/products/" +productid;

     return  this.httpClient.get<Products>(producturl);
  }

  updateproduct(productid,productbody):Observable<Products>{
    const producturl = "http://localhost:3000/products/" +productid;

     return  this.httpClient.put<Products>(productid,producturl);
  }
  deleteproduct(productid):Observable<Products>{
    const producturl = "http://localhost:3000/products/" +productid;

     return  this.httpClient.delete<Products>(productid);
  }

  searchcategoryproduct(categoryid):Observable<Products>{
    const producturl = "http://localhost:3000/products?category=" +categoryid;

     return  this.httpClient.get<Products>(producturl);
  }
  searchdateproduct(dateParam):Observable<Products>{
    const producturl = "http://localhost:3000/products/date=" +dateParam;

     return  this.httpClient.get<Products>(dateParam);
  }
}
