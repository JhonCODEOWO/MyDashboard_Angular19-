import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TitleComponent } from "../../../shared/components/title/title.component";
type Grade = 'A'|'B'|'F';

@Component({
  selector: 'app-control-flow',
  imports: [TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ControlFlowComponent {
  public showContent= signal(false);
  public grade= signal<Grade>('A');
  public frameworks = signal(['Angular', 'Vue', 'Svelte', 'React']);
  public frameworks2 = signal([]);

  toggleContent(){
    this.showContent.update(value => !value)
  }
}
