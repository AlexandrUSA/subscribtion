import { Injectable } from '@angular/core';
import {Observable, of, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public login(data): Observable<any> {
    const isCorrect = data.password === 'admin' && data.login === 'admin';

    return  isCorrect ? of({ token: 123 }) : throwError({ message: 'wrong password' });
  }
}
