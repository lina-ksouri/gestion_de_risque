import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Level } from '../models/level';

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  private getUrl : string = `${environment.apiUrl}/level`;
  private getUrl1 : string = `${environment.apiUrl}/addlevel`;
    constructor(private _httpClient: HttpClient) { }
    getLevels(): Observable<Level[]>{
      return this._httpClient.get<Level[]>(this.getUrl).pipe(map(response => response))
    }
  
    saveLevels(level: Level ): Observable<Level>{
      return this._httpClient.post<Level>(this.getUrl1, level);
    }
}
