import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingEntityManagerComponent } from './accounting-entity-manager.component';

describe('AccountingEntityManagerComponent', () => {
  let component: AccountingEntityManagerComponent;
  let fixture: ComponentFixture<AccountingEntityManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountingEntityManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingEntityManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
