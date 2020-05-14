import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-highlight-threshold',
  templateUrl: './highlight-threshold.component.html',
  styleUrls: ['./highlight-threshold.component.scss']
})
export class HighlightThresholdComponent implements OnInit {

  private value: string;

  className = '';
  selected = false;

  @Input()
  set Value(value: string) {
    this.value = value;
    this.setThresholdClass();
  }

  get Value(): string {
    return this.value;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  setThresholdClass() {
    const valueNum = +this.Value;

    if (valueNum >= 30) {
      this.className = 'accent';
      this.selected = true;
    }

  }

}
