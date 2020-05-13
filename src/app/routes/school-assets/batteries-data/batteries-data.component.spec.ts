import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteriesDataComponent } from './batteries-data.component';

describe('BatteriesDataComponent', () => {
  let component: BatteriesDataComponent;
  let fixture: ComponentFixture<BatteriesDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatteriesDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatteriesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
