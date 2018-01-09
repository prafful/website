import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
//import { Observable } from 'rxjs/Observable'

import {User} from './user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class DataServiceService {

  constructor(private http:Http) { }

  newsmakers =['veena', 'gopal', 'mary', 'john'];

  getValue(){
    console.log("getValue method from the data service")
  }

//promise implementation  
/*
  getRemoteData():Promise<User[]>{
    
   
    return this.http.get('https://jsonplaceholder.typicode.com/users')
                    .toPromise()
                    .then( response => response.json() as User[] );

   
  }

*/

//observable implementation
getRemoteData():Observable<User[]>{

  return this.http.get('https://jsonplaceholder.typicode.com/users')
            .map(response => response.json()  as User[]);

  
}

}
