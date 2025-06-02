import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  imports: [],
  templateUrl: './change-detection.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.Default,
})
export default class ChangeDetectionComponent{
  state: boolean = false;

  constructor(){
    setTimeout(() => {
      this.state = true;
    }, 3000)
  }

  change(){
    this.state = true;
  }
}
