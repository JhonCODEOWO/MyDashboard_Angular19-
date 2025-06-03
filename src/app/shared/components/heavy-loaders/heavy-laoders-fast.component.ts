import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-Fast',
  imports: [CommonModule],
  template: `<section [ngClass]="['w-full', cssClass]">
    <ng-content/>
  </section>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeavyLoadersFastComponent {
  @Input({required: true}) cssClass!: string;
}
