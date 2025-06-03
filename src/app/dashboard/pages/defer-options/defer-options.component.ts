import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeavyLoadersFastComponent } from '@shared/components/heavy-loaders/heavy-laoders-fast.component';
import { TitleComponent } from '@shared/components/title/title.component';

@Component({
  selector: 'app-defer-options',
  imports: [HeavyLoadersFastComponent, TitleComponent],
  templateUrl: './defer-options.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DeferOptionsComponent {
  constructor(){
    console.log('Heavy fast loader cargado');
  }
}
