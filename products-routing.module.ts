import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewAllProductByCategoryComponent } from './view-all-product-by-category/view-all-product-by-category.component';
import { ViewAllProductByDateComponent } from './view-all-product-by-date/view-all-product-by-date.component';
import { UpdateProductComponent } from './update-product/update-product.component';


const routes: Routes = [
  { path: '', component: ViewAllProductComponent},
  { path: 'createproduct', component: CreateProductComponent},
  { path: 'category/:id', component: ViewAllProductByCategoryComponent},
  {path:'serach-date', component:ViewAllProductByDateComponent},
  { path: 'Deleteproduct/:id', component: DeleteProductComponent},
  {path:'updateprodiuct/:id', component:UpdateProductComponent},
  { path: 'product/:id', component: ViewProductComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
