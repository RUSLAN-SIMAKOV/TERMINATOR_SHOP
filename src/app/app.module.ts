import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {ProductListComponent} from "./products/product-list.component";
import { Terminator1Component } from "./terminator1/terminator1.component";
import { Terminator2Component } from "./terminator2/terminator2.component";
import {SharedModules} from "./shared/shared.modules";
import {FiltertextboxComponent} from "./products/filtertextbox.component";
import {FormsModule} from "@angular/forms";
import {DataService} from "./core/data.service";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    Terminator1Component,
    Terminator2Component,
    FiltertextboxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModules,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
