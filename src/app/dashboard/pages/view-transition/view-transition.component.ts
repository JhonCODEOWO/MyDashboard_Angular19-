import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TitleComponent } from '@shared/components/title/title.component';

@Component({
  selector: 'app-view-transition',
  imports: [TitleComponent],
  template: `
    <app-title title="View transition 1"/>

    <section class="flex justify-start">
      <img srcset="https://picsum.photos/id/237/200/300" alt="Picsum" width="200" height="300" style="view-transition-name: hero1">

      <div class=" bg-blue-500 w-56 h-56" style="view-transition-name: hero2"></div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ViewTransitionComponent { }
