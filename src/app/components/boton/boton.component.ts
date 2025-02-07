import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-boton',
  imports: [RouterLink],
  templateUrl: './boton.component.html',
  styleUrl: './boton.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BotonComponent {

  @Input() texto = 'Botón';
  @Input() ruta = '/';

}
