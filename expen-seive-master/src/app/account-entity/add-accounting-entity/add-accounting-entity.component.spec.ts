import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccountingEntityComponent } from './add-accounting-entity.component';

describe('AddAccountingEntityComponent', () => {
  let component: AddAccountingEntityComponent;
  let fixture: ComponentFixture<AddAccountingEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAccountingEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccountingEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
