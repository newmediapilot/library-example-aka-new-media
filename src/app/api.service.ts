import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, take, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //todo: define prefix in environment.ts
  //todo: create interceptor to amend prefix to each request
  //todo: extract specialist services
  //todo: define classes for incoming data
  //todo: define global error handling
  //todo: define interface for book

  private prefix: string = 'https://aka-library-api.azurewebsites.net/';

  constructor(private httpClient: HttpClient) {
  }

  getLibraries() {
    return this.get(`${this.prefix}/api/libraries`);
  }

  getLibrary(id) {
    return this.get(`${this.prefix}/api/libraries/${id}`);
  }

  getCollection(id) {
    return this.get(`${this.prefix}/api/libraries/${id}/books`);
  }

  get(url) {
    return this.httpClient.get(url);
  }

}
