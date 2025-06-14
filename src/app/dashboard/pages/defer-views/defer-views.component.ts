import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeavyLoadersSlowComponent } from "../../../shared/components/heavy-loaders/heavy-loaders-slow.component";
import { TitleComponent } from "../../../shared/components/title/title.component";

@Component({
  selector: 'app-defer-views',
  imports: [HeavyLoadersSlowComponent, TitleComponent],
  templateUrl: './defer-views.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DeferViewsComponent { }
