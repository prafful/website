import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './parent/child3/child3.component';
import { SortDataPipe } from './sort-data.pipe';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { TaskComponent } from './task/task.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    Child2Component,
    Child3Component,
    SortDataPipe,
    CatalogComponent,
    ProductsComponent,
    OrdersComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    RouterModule.forRoot([
      {
        path:"order",
        component:OrdersComponent
      },
      {
        path:"product",
        component:ProductsComponent
      },
      {
        path:"catalog",
        component:CatalogComponent
      },
      {
        path:"child1",
        component:ChildComponent
      },
      {
        path:"child2",
        component:Child2Component
      },
      {
         path:"taskmanager",
         component:TaskComponent 
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule1 { }
