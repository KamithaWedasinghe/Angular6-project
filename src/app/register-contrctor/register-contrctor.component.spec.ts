import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterContrctorComponent } from './register-contrctor.component';

describe('RegisterContrctorComponent', () => {
  let component: RegisterContrctorComponent;
  let fixture: ComponentFixture<RegisterContrctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterContrctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterContrctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
