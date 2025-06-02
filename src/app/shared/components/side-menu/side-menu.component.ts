import { ChangeDetectionStrategy, Component } from '@angular/core';
import { routes } from '../../../app.routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  imports: [CommonModule, RouterLink],
  templateUrl: './side-menu.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent {
    menuItems = routes.map(r => r.children ?? [])
    .flat()
    .filter(route=> route && route.path && route.path != '**')
    .filter(route => route && route.path && !route.path.includes(':'))
}
