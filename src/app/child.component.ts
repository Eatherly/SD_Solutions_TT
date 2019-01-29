import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { HttpService} from './http.service';
import {accauntsBase} from './accauntsBase';

//import {Color} from './user';
       
@Component({
    selector: 'child-app',
    templateUrl: 'child.component.html',
    styleUrls: ['./child.component.less'],
    providers: [HttpService],
})
export class ChildComponent implements OnInit {
    constructor(private httpService: HttpService){};
    accauntsBase: accauntsBase[]=[];

    
    ngOnInit(){
            
        this.httpService.getData().subscribe(data => 
            {
                this.accauntsBase=data['accauntArray'];
                console.log(this.accauntsBase)
             
            }
        )
    }  
    @Input() userLogin: string;
    @Input() userPassword: string;
    
    
    
    @Output() userLoginChange = new EventEmitter<string>();
    @Output() userPasswordChange = new EventEmitter<string>();
    
    onLoginChange(model: string){
        this.userLogin = model;
        this.userLoginChange.emit(model);
        
    }
    onPasswordChange(model: string){
        this.userPassword = model;
        this.userPasswordChange.emit(model);
    }
    
}