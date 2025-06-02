import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from "../shared/components/side-menu/side-menu.component";
import { routes } from '../app.routes';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, SideMenuComponent],
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardComponent {
  menuItems = routes.map(r => r.children ?? [])
    .flat()
    .filter(route=> route && route.path && route.path != '**')
    .filter(route => route && route.path && !route.path.includes(':'))
}
