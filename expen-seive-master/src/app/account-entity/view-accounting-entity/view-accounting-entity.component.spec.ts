import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAccountingEntityComponent } from './view-accounting-entity.component';

describe('ViewAccountingEntityComponent', () => {
  let component: ViewAccountingEntityComponent;
  let fixture: ComponentFixture<ViewAccountingEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAccountingEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAccountingEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
