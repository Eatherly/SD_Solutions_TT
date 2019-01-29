import { Component } from '@angular/core';
import { HttpService} from './http.service';
import { Post} from './http.post';
         
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['./app.component.less'],
    providers: [HttpService,Post],
})
export class AppComponent  {
       
    responseLogin:string = "";
    responsePassword:string = "";

    constructor(private httpService: Post){}
    submit(login: string, password: string){
        this.httpService.postData(login,password)
                .subscribe(
                    (data: string) => {
                        this.responseLogin=data['login']; 
                        this.responsePassword=data['password'];
                    console.log(data)},
                    error => console.log(error)
                );
    }
}