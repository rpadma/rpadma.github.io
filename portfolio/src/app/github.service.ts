import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  uriloc:string;
  constructor(private _http:Http) { }

  getuserdata():any{

  
      this.uriloc ="https://api.github.com/users/rpadma";
  
      return this._http.get(this.uriloc).map(data => {
        
        return data.text(); 
     
        });
  
    
  }

}
