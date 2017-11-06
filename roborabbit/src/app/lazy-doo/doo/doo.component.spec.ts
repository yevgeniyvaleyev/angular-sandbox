import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DooComponent } from './doo.component';

describe('DooComponent', () => {
  let component: DooComponent;
  let fixture: ComponentFixture<DooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
