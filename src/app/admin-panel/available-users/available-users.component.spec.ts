import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableUsersComponent } from './available-users.component';

describe('AvailableUsersComponent', () => {
  let component: AvailableUsersComponent;
  let fixture: ComponentFixture<AvailableUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
