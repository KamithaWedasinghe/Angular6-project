import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// import 'rxjs/add/operator/map'; 
// import 'rxjs/Rx';
import { map, filter, switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http:HttpClient) { }

  registerUser(user){
    //let headers = new Headers();
    // headers.append('Content-Type','application/json');
    let httpOptions = {
      headers : new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.http.post('http://localhost:3000/users/register',user, httpOptions)
    .pipe(map((response: any) => response.json())); 
  }

  authenticateUser(user){
    // let headers = new Headers();
    // headers.append('Content-Type','application/json');

    let httpOptions = {
      headers : new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.http.post('http://localhost:3000/user/register',user,httpOptions)
    .pipe(map((response: any) => response.json()));
  }

  storeUserData(token,user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logOut(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
      
}
