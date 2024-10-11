import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestPageService {
  private http = inject(HttpClient)

  public getHeroImg(id: string): Observable<any>{
    const url = `api/test/${id}`;
    return this.http.get<any>(url)
  }
}
