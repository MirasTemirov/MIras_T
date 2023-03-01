import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProductListComponent} from "./components/product-list/product-list.component";
import {ProductItemComponent} from "./components/product-item/product-item.component";
import {AppComponent} from "./app.component";
import {ProductsComponent} from "./components/products/products.component";

const routes: Routes = [
  {path: 'products/category/:id', component: ProductListComponent},
  {path: 'products/category/:category_id/item/:id', component: ProductItemComponent},
  {path: 'products', component: ProductsComponent},
  {path: '', redirectTo: 'products', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
