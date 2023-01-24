import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Class } from '../models/class';
import { map } from 'rxjs/operators';
import { Tiers } from '../models/tiers';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  private getUrl : string = `${environment.apiUrl}/class`;
  private getUrl1 : string = `${environment.apiUrl}/addclass`;
  constructor(private _httpClient: HttpClient) { }
  getClass(): Observable<Class[]>{
    return this._httpClient.get<Class[]>(this.getUrl).pipe(map(response => response))
  }
  saveTiers(classe : Class ): Observable<Class>{
    return this._httpClient.post<Class>(this.getUrl1, classe);
  }
}
