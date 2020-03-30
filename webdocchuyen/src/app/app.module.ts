import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { MenuComponent } from './components/blocks/menu/menu.component'
import {SliderComponent} from './components/blocks/slider/slider.component'
import {UserComponent} from './components/blocks/user/user.component'
import {CategoriesComponent} from './components/blocks/categories/categories.component'



//Ih2Bbb5WZwrZAtoL
//mongodb+srv://bookstores:<password>@cluster0-hyeah.gcp.mongodb.net/test?retryWrites=true&w=majority


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SliderComponent,
    UserComponent,
    CategoriesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
