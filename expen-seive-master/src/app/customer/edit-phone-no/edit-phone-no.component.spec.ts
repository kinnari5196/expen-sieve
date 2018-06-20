import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPhoneNoComponent } from './edit-phone-no.component';

describe('EditPhoneNoComponent', () => {
  let component: EditPhoneNoComponent;
  let fixture: ComponentFixture<EditPhoneNoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPhoneNoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPhoneNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
