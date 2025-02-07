import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-titulo',
  imports: [],
  templateUrl: './titulo.component.html',
  styleUrl: './titulo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TituloComponent {

  @Input() titulo: string = 'Título';

}
