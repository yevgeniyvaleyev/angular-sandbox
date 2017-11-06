import { Observable } from 'rxjs/Observable';
import { DataService } from './../data.service';
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoberComponent } from './bober.component';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/throw';


describe('BoberComponent', () => {
  let component: BoberComponent;
  let service: DataService;
  // let fixture: ComponentFixture<BoberComponent>;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ BoberComponent ]
  //   })
  //   .compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(BoberComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  beforeEach(() => {
    service = new DataService(null);
    component = new BoberComponent(service);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return all data', () => {
    const data = [1,2];
    spyOn(service, 'getAll').and.callFake(() => {
      return Observable.from([ data ]);
    });
    spyOn(service, 'getErr').and.callFake(() => {
      return Observable.from([ data ]);
    });
    component.ngOnInit();
    expect(component.data).toBe(data);
  });

  it('should throw if gets error', () => {
    spyOn(service, 'getErr').and.callFake(() => {
      const error = 'some error';
      return Observable.throw(error);
    });

    expect(() => {
      component.ngOnInit();
    }).toThrowError();
  });
});
