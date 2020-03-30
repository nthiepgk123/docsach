import { Injectable} from '@angular/core'
import { HttpClient ,HttpHeaders} from '@angular/common/http'

@Injectable()
export class BookService{
    constructor(private http: HttpClient){}

    getbooks(id : string){
        const url = "http://localhost:3000/api/category";
        let options = {
            headers : new HttpHeaders().set("Content-Type","application/x-www-form-urlencoded")
        }
        let body = new URLSearchParams();
        body.set("id",id);
        return this.http.post(url,body.toString(),options);
    }
}