import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {take, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //todo: extract specialist services
  //todo: create interceptor to amend prefix to each request
  //todo: define prefix in environment.ts
  private prefix: string = 'https://aka-library-api.azurewebsites.net/';

  constructor(private httpClient: HttpClient) {
  }

  //todo: define class for incoming data
  getLibraries() {
    return this.httpClient.get(`${this.prefix}/api/libraries`).pipe(
      take(1)
    )
  }


}
