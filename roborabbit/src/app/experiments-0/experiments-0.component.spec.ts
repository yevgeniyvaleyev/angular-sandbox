import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiments0Component } from './experiments-0.component';

xdescribe('Experiments0Component', () => {
  let component: Experiments0Component;
  let fixture: ComponentFixture<Experiments0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiments0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiments0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
