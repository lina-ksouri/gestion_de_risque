import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tiers } from '../models/tiers';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class TiersService {
private getUrl : string = `${environment.apiUrl}/tiers`;
private getUrl1 : string = `${environment.apiUrl}/addtiers`;
private baseUrl : string = `${environment.apiUrl}`;
  user!: User;
  constructor(private _httpClient: HttpClient) { }
  getTiers(): Observable<Tiers[]>{
    return this._httpClient.get<Tiers[]>(this.getUrl).pipe(map(response => response))
  }

  saveTiers(tier: Tiers): Observable<any>{
    return this._httpClient.post<Tiers>(this.getUrl1, tier);
  }  
  
  uploadFile( file: File , id : number ) : Observable<any>
  {
    let url = this.baseUrl + "uploadImage/" + id ;

    const formdata: FormData = new FormData();
  
    formdata.append('file', file);
 
    return this._httpClient.post(url , formdata);
  }
}

