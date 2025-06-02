import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-user-slow',
  imports: [],
  template: `<h1>Hola mundo</h1>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserLoaderComponent { }
