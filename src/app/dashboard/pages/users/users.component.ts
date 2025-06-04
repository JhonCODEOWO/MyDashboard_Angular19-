import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UsersService } from '@services/users.service';
import { TitleComponent } from '@shared/components/title/title.component';

@Component({
  selector: 'app-users',
  imports: [TitleComponent, RouterLink],
  templateUrl: './users.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UsersComponent {
  public usersService = inject(UsersService);
}
