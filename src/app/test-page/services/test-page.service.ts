import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestPageService {
  private http = inject(HttpClient)

  public testGet(id: number): Observable<true>{
    const url = `api/test/${id}`;
    return this.http.get<any>(url)
  }
}
