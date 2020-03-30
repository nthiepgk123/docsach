import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable()
export class CategoryService{
    constructor(private http: HttpClient){}

    getCategory(){
        // thong so ve options (bat buoc)
        let options = {
            headers : new HttpHeaders().set("Content-Type","application/x-www-form-urlencoded")
        }
        // neu co tham so chuyen vao.
        //return this.http.post("http://localhost:4200/api/cate",body);

        return this.http.post("http://localhost:3000/api/cate",options);

        // thong so ve body
        
    }
}