import { Http } from '@angular/http';
import { addProviders } from '@angular/core/testing';
import { DataMainService } from './data-main.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/throw';

describe('DataMainService', () => {

  let service: DataMainService;
  let http: Http;

  beforeEach(() => {
    http
    service = new DataMainService('test', http);
  });

  it('should get all data', () => {
    const response = {
      body: '{test: 1}'
    }
    let allData: Object;
    spyOn(http, 'get').and.callFake(() =>
      Observable.from([response])
    );
    service.getAll().subscribe((data) => allData);

    expect(allData).toEqual(1)
  });
});
