import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HighlightThresholdComponent} from './highlight-threshold.component';
import {MaterialModule} from '../../../material.module';

describe('HighlightThresholdComponent', () => {
  let component: HighlightThresholdComponent;
  let fixture: ComponentFixture<HighlightThresholdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [HighlightThresholdComponent]
    })
      .compileComponents();
  }));


  it('should set className to "accent" and selected to "true" if Value >= 30', () => {
    fixture = TestBed.createComponent(HighlightThresholdComponent);
    component = fixture.componentInstance;
    component.Value = '35';
    fixture.detectChanges();
    expect(component.className).toEqual('accent');
    expect(component.selected).toBeTrue();
  });

  it('should NOT set className and selected if Value < 30', () => {
    fixture = TestBed.createComponent(HighlightThresholdComponent);
    component = fixture.componentInstance;
    component.Value = '25';
    fixture.detectChanges();
    expect(component.className).toEqual('');
    expect(component.selected).toBeFalse();
  });

  it('should apply class "mat-accent" if Value >= 30', () => {
    fixture = TestBed.createComponent(HighlightThresholdComponent);
    component = fixture.componentInstance;
    component.Value = '35';
    fixture.detectChanges();
    const classList = fixture.nativeElement.querySelector('mat-chip').classList;
    expect(classList).toContain('mat-accent');
  });

  it('should NOT apply class "mat-accent" if Value < 30', () => {
    fixture = TestBed.createComponent(HighlightThresholdComponent);
    component = fixture.componentInstance;
    component.Value = '25';
    fixture.detectChanges();
    const classList = fixture.nativeElement.querySelector('mat-chip').classList;
    expect(classList).not.toContain('mat-accent');
  });

  it('should render given value as percentage', () => {
    fixture = TestBed.createComponent(HighlightThresholdComponent);
    component = fixture.componentInstance;
    component.Value = '25';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('mat-chip').textContent).toContain('25 %');
  });
});
