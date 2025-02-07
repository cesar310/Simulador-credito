import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-titulo-tutorial',
  templateUrl: './titulo-tutorial.component.html',
  styleUrl: './titulo-tutorial.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TituloTutorialComponent {
  @Input() titulo = '';
}