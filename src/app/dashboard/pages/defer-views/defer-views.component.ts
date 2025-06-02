import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeavyLoadersSlowComponent } from "../../../shared/components/heavy-loaders/heavy-loaders-slow.component";

@Component({
  selector: 'app-defer-views',
  imports: [HeavyLoadersSlowComponent],
  templateUrl: './defer-views.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DeferViewsComponent { }
