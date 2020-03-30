import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
 
import {HomeComponent} from './components/pages/home/home.component'
import {DetailComponent} from './components/pages/detail/detail.component'
import {CateComponent} from './components/pages/cate/cate.component'

// cac pages su dung
// path : thanh dia chi  /cate /home /detail
const routes: Routes = [
  {path: 'cate',component:CateComponent},
  {path: 'detail/:id',component:DetailComponent},
  {path: '**',component:HomeComponent}
];

@NgModule({
  // noi khai bao tat ca component da co
  declarations: [
    HomeComponent,DetailComponent,CateComponent
  ],
  // khai bao cac thu vien su dung
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  // lay ra de su dung
  exports: [RouterModule]
})
export class AppRoutingModule { }
