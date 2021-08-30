import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { CategoryListComponent } from './category/category-list/category-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
