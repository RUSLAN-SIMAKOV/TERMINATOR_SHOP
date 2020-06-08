import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {Terminator1Component} from "./terminator1/terminator1.component";
import {Terminator2Component} from "./terminator2/terminator2.component";
import {BrowserModule} from "@angular/platform-browser";
import {ProductListComponent} from "./products/product-list.component";


const routes: Routes = [
  {path: "terminator1", component: Terminator1Component},
  {path: "terminator2", component: Terminator2Component},
  {path: "", component: ProductListComponent},

];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
