import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Process } from '../models/process';
import { map } from 'rxjs/operators';
import { Level } from '../models/level';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {
  private getUrl : string = `${environment.apiUrl}/allprocess`;
  private getUrl1 : string = `${environment.apiUrl}/addprocess`;
  private getUrl2 : string = `${environment.apiUrl}/editprocess`;
  private getUrl3 : string = `${environment.apiUrl}/process`;
  private getUrl4 : string = `${environment.apiUrl}/getprocess`;
    constructor(private _httpClient: HttpClient) { }
    getprocess(): Observable<Process[]>{
      return this._httpClient.get<Process[]>(this.getUrl).pipe(map((response) => response))
    }
  
    saveProcess(process: Process ): Observable<Process>{
      return this._httpClient.post<Process>(this.getUrl1, process);
    }
    getProcessByname(name:string): Observable<Process>{
      return this._httpClient.get<Process>(`${this.getUrl3}/${name}`);
    }
    updateProcess(name: string, value: any): Observable<Object> {
      return this._httpClient.put(`${this.getUrl2}/${name}`, value);
    }
    getProcessBylevel(level:string): Observable<Process[]>{
      return this._httpClient.get<Process[]>(`${this.getUrl4}/${level}`);
    }
}
