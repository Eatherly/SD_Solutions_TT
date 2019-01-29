import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
  
@Injectable()
export class Post{
  
    constructor(private http: HttpClient){ }

    postData(login: string,password: string){
         
        const body = {login: login, password: password};
        return this.http.post('data.php', body); 
    }
}