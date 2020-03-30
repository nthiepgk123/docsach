import { Component } from '@angular/core'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { BookService} from '../../../services/book.module'


@Component({
    templateUrl: "detail.component.html",
    selector : "detail",
    providers: [BookService]
})



export class DetailComponent{
    list_books:any;
    books:any = [];
    constructor(
        private route:ActivatedRoute,private book:BookService){
        
        this.route.paramMap.subscribe((params:ParamMap)=> {
            let id = params.get("id");
            book.getbooks(id).subscribe(data => {
                this.list_books = data;
                this.books = this.list_books.Books_id;
                console.log(this.list_books);

            })
            //console.log(this.list_books[0]);
        });
        //book.getbooks().subscribe(data =>console.log(data));

    }
    ngOnInit(){
         
         //this.route.paramMap.subscribe((params:ParamMap)=> id = params.get("id"));
    }

    
}