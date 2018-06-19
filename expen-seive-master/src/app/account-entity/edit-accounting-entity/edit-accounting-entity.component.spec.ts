import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAccountingEntityComponent } from './edit-accounting-entity.component';

describe('EditAccountingEntityComponent', () => {
  let component: EditAccountingEntityComponent;
  let fixture: ComponentFixture<EditAccountingEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAccountingEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAccountingEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
