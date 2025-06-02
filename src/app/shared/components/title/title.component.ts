import { booleanAttribute, ChangeDetectionStrategy, Component, Input, input, signal } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent {
  title = input.required(); //Required con signals
  @Input({transform: booleanAttribute}) withShadow: boolean = false;
  withShadow2 = input({transform: booleanAttribute}); //Transform en signal
}
