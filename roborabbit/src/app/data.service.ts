import { DataMainService } from './data-main.service';
import { NotFoundError } from './common/not-found';
import { AppError } from './common/app-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


const url = '/assets/data.json';

@Injectable()
export class DataService extends DataMainService {

  constructor(http: Http) {
    super(url, http);
  }

  getErr() {
    return this.getAllFor(`${url}-1`)
  }

}
