import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './parent/child3/child3.component';
import { SortDataPipe } from './sort-data.pipe';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { TaskComponent } from './task/task.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ModelFormComponent } from './model-form/model-form.component';
import { Consume1Component } from './consume1/consume1.component';
import { Consume2Component } from './consume2/consume2.component';
import { DataServiceService } from './data-service.service';
import { SearchFilterPipe } from './search-filter.pipe';


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
    TaskComponent,
    TemplateFormComponent,
    ModelFormComponent,
    Consume1Component,
    Consume2Component,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpModule,
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
      },
      {
        path:"template",
        component:TemplateFormComponent 
     },
     {
       path:"model",
       component:ModelFormComponent
     },
     {
      path:"consume1",
      component:Consume1Component
    },
    {
      path:"consume2",
      component:Consume2Component
    }
    ])
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule1 { }
