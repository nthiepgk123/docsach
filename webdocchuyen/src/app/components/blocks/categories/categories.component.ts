import { Component } from '@angular/core'
import { CategoryService } from '../../../services/category.module'
import { CateComponent } from '../../pages/cate/cate.component';
@Component({
    templateUrl : "../categories/categories.component.html",
    selector : "categories",
    providers:[CategoryService]
})

export class CategoriesComponent{
    arrCate:any = [];
    constructor(private cateService : CategoryService){
        // doi khi nao co kq cua ben server moi chay tiep
        cateService.getCategory().subscribe(data => {
            this.arrCate = data;
        });
    }
}