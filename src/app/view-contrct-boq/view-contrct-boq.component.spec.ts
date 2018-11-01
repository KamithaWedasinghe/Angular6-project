import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContrctBOQComponent } from './view-contrct-boq.component';

describe('ViewContrctBOQComponent', () => {
  let component: ViewContrctBOQComponent;
  let fixture: ComponentFixture<ViewContrctBOQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewContrctBOQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewContrctBOQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
