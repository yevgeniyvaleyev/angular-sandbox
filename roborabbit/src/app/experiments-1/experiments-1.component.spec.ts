import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiments1Component } from './experiments-1.component';

xdescribe('Experiments1Component', () => {
  let component: Experiments1Component;
  let fixture: ComponentFixture<Experiments1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiments1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiments1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
