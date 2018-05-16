import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVouchersComponent } from './view-vouchers.component';

describe('ViewVouchersComponent', () => {
  let component: ViewVouchersComponent;
  let fixture: ComponentFixture<ViewVouchersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewVouchersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVouchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
