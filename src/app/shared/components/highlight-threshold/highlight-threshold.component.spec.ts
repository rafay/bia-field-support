import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightThresholdComponent } from './highlight-threshold.component';

describe('HighlightThresholdComponent', () => {
  let component: HighlightThresholdComponent;
  let fixture: ComponentFixture<HighlightThresholdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlightThresholdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightThresholdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
