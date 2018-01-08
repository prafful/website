import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class DataServiceService {

  constructor(private http:Http) { }

  newsmakers =['veena', 'gopal', 'mary', 'john'];

  getValue(){
    console.log("getValue method from the data service")
  }

  getRemoteData(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
      (data) => console.log(data)
    );
  }

}
