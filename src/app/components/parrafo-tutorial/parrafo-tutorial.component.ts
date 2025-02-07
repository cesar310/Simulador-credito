import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-parrafo-tutorial',
  templateUrl: './parrafo-tutorial.component.html',
  styleUrl: './parrafo-tutorial.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParrafoTutorialComponent {
  @Input() texto = '';
}