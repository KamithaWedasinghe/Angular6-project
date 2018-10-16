import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBOQComponent } from './new-boq.component';

describe('NewBOQComponent', () => {
  let component: NewBOQComponent;
  let fixture: ComponentFixture<NewBOQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBOQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBOQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
