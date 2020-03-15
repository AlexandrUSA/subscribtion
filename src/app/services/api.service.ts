import { Injectable } from '@angular/core';
import {Observable, of, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public login(data): Observable<any> {
    return data.password === '1111' ? of({ token: 123 }) : throwError({ message: 'wrong password' });
  }
}
