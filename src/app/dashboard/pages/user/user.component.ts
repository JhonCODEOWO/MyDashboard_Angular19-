import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleComponent } from '@shared/components/title/title.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { User } from '../../../interfaces/req-response.interface';
import { switchMap, tap } from 'rxjs';
import { UsersService } from '@services/users.service';

@Component({
  selector: 'app-user',
  imports: [TitleComponent],
  templateUrl: './user.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UserComponent {
  private userService = inject(UsersService);
  private route = inject(ActivatedRoute);
  public user = toSignal(
    this.route.params.pipe(
      switchMap(({id}) => this.userService.getUserById(id)),
      tap((user) => console.log(user))
    )
  );

  titlePage = computed(() => {
    if(!this.user()) return 'Información del usuario'
    return `Información del usuario: ${this.user()!.first_name} ${this.user()!.last_name}`
  });
}
