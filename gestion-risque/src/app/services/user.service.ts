import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';


let API_URL = "http://localhost:8090/api/user/";

@Injectable({
  providedIn: 'root'
})

export class UserService {
    private getUrl : string = `localhost:8090/users`;
  public currentUser: Observable<User>;
  private currentUserSubject: BehaviorSubject<User>;
  headers!: HttpHeaders;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')|| '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }
   getuser(block:Boolean) : Observable<User[]>{
    return this.http.get<User[]>(API_URL + "all"+ `/${block}`).pipe(map(response => response))
}


  setHeaders() {
    this.headers = new HttpHeaders({
      authorization:'Bearer ' + this.currentUserSubject.value.token,
      "Content-Type":"application/json; charset=UTF-8"
    });
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(user: User): Observable<any> {
    const headers = new HttpHeaders(
      user ? {
        authorization:'Basic ' + btoa(user.username + ':' + user.password)
      } : {}
    );

    return this.http.get<any> (API_URL + "login", {headers:headers}).pipe(
      map(response =>{
        if(response){
          localStorage.setItem('currentUser', JSON.stringify(response));
          this.currentUserSubject.next(response);
        }
        return response;
      })
    );
  }

  logOut(): Observable<any> {
    return this.http.post(API_URL + "logout", {}).pipe(
      map(response => {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null!);
      })
    );
  }

  register(user: User): Observable<any> {
    return this.http.post(API_URL + "registration", JSON.stringify(user),
  {headers: {"Content-Type":"application/json; charset=UTF-8"}});
  }
  
  update(name: string, value: any): Observable<Object> {
    return this.http.put(API_URL + "update" + `/${name}`, value);
  }
  delete(username : string,block : boolean) : Observable<Object>{
    return this.http.patch(API_URL + "delete" + `/${username}`+ `/${block}`,null);
  }
  getByname(name:string): Observable<User>{
    return this.http.get<User>(API_URL + "currentuser" + `/${name}`);
  }

}
