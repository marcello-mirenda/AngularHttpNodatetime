import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo, ResponseOptions } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs/internal/Observable';
import { of, from} from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  private person = [];
  private db = {person: this.person};

  constructor() {
    console.log('InMemoryDataService');
  }

  createDb(reqInfo?: RequestInfo) {
    return this.db;
  }

 // intercept ResponseOptions from default HTTP method handlers
  // add a response header and report interception to console.log
  responseInterceptor(resOptions: ResponseOptions, reqInfo: RequestInfo) {

    const method = reqInfo.method.toUpperCase();
    const body = JSON.stringify(reqInfo.utils.getJsonBody(reqInfo.req));
    console.log(`responseInterceptor: ${method} ${reqInfo.req.url}: \n${body}`);
    console.log('---');
    console.log(JSON.stringify(resOptions));
    console.log('---');
    console.log(JSON.stringify(this.db));

    return resOptions;
  }
}
