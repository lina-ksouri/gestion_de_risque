import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private getUrl : string = `${environment.apiUrl}/category`;
private getUrl1 : string = `${environment.apiUrl}/addCategory`;
  constructor(private _httpClient: HttpClient) { }
  getCategory(): Observable<Category[]>{
    return this._httpClient.get<Category[]>(this.getUrl).pipe(map(response => response))
  }

  saveTiers(category: Category ): Observable<Category>{
    return this._httpClient.post<Category>(this.getUrl1, category);
  }
}
