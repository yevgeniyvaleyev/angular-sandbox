import { AppError } from './common/app-error';
import { NotFoundError } from './common/not-found';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataMainService {

  constructor(private url: string, private http: Http) { }

  getAll () {
    return this.http.get(this.url)
      .map((response) => response.json())
      .catch(this.handleError)
  }

  getAllFor (url: string) {
    return this.http.get(url)
      .map((response) => response.json())
      .catch(this.handleError)
  }

  private handleError(error: Response) {
    if (error.status === 404) {
      return Observable.throw(new NotFoundError());
    }
    return Observable.throw(new AppError(error));
  }
}
