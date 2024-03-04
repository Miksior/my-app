import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

interface TestInterface {
  testField: string
}

@Injectable({
  providedIn: 'root'
})
export class TestPageService {
  private http = inject(HttpClient)

  public testGet(id: number): Observable<TestInterface>{
    const url = `api/test/${id}`;
    return this.http.get<TestInterface>(url)
  }
}
